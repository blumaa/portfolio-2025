"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import MuppetPodcaster from "./MuppetPodcaster";
import { modcastPlaylist, ModcastSegment } from "./playlist";

// Types for Google Cloud TTS API
interface TTSRequest {
  input: { text: string };
  voice: {
    languageCode: string;
    name: string;
  };
  audioConfig: {
    audioEncoding: string;
    pitch: number;
    speakingRate: number;
  };
}

interface TTSResponse {
  audioContent: string;
}

export default function Modcast() {
  // Segment navigation
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const currentSegment = modcastPlaylist[currentSegmentIndex];

  // Audio refs
  const ttsAudioRef = useRef<HTMLAudioElement | null>(null);
  const songAudioRef = useRef<HTMLAudioElement | null>(null);

  // Muppet state
  const [mode, setMode] = useState<"talk" | "listenToMusic">("talk");
  const [mouthState, setMouthState] = useState<"closed" | "half" | "open">(
    "closed",
  );

  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mute state
  const [isMuted, setIsMuted] = useState(false);

  // Current audio info
  const [currentInfo, setCurrentInfo] = useState<string>("");

  // Mouth animation interval ref
  const mouthAnimationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Track if this is the initial mount
  const isInitialMountRef = useRef<boolean>(true);

  // Web Audio API refs for music visualization
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // BPM detection state
  const [detectedBPM, setDetectedBPM] = useState<number>(120); // Default 120 BPM
  const bpmDetectionRef = useRef({
    isDetecting: false,
    beatTimestamps: [] as number[],
    intervals: [] as number[],
    lockedBPM: null as number | null,
  });

  // Generate TTS audio from script
  const generateTTS = useCallback(async (script: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TTS_API_KEY;

    if (!apiKey) {
      throw new Error(
        "Google TTS API key not found. Please set NEXT_PUBLIC_GOOGLE_TTS_API_KEY environment variable.",
      );
    }

    const requestBody: TTSRequest = {
      input: { text: script },
      voice: {
        languageCode: "en-US",
        name: "en-US-Neural2-J", // Quirky male voice
      },
      audioConfig: {
        audioEncoding: "MP3",
        pitch: 2.0, // Higher pitch for quirky effect
        speakingRate: 1.1, // Slightly faster
      },
    };

    try {
      const response = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "TTS API request failed");
      }

      const data: TTSResponse = await response.json();
      const audioUrl = `data:audio/mp3;base64,${data.audioContent}`;
      return audioUrl;
    } catch (err) {
      throw new Error(
        `TTS generation failed: ${err instanceof Error ? err.message : "Unknown error"}`,
      );
    }
  }, []);

  // Start mouth animation sync
  const startMouthAnimation = useCallback(() => {
    // Clear any existing interval
    if (mouthAnimationIntervalRef.current) {
      clearInterval(mouthAnimationIntervalRef.current);
    }

    const mouthStates: Array<"closed" | "half" | "open"> = [
      "closed",
      "half",
      "open",
    ];
    let currentStateIndex = 0;

    mouthAnimationIntervalRef.current = setInterval(() => {
      currentStateIndex = (currentStateIndex + 1) % mouthStates.length;
      setMouthState(mouthStates[currentStateIndex]);
    }, 150); // Cycle every 150ms for natural talking rhythm
  }, []);

  // Stop mouth animation
  const stopMouthAnimation = useCallback(() => {
    if (mouthAnimationIntervalRef.current) {
      clearInterval(mouthAnimationIntervalRef.current);
      mouthAnimationIntervalRef.current = null;
    }
    setMouthState("closed");
  }, []);

  // Initialize Web Audio API for music visualization
  const initAudioContext = useCallback(
    (audioElement: HTMLAudioElement) => {
      try {
        // Avoid creating multiple contexts for the same element
        if (sourceNodeRef.current) return;

        // Create AudioContext if it doesn't exist
        if (!audioContextRef.current) {
          const AudioContextClass =
            window.AudioContext || (window as any).webkitAudioContext;
          audioContextRef.current = new AudioContextClass();
        }

        // Create analyser node if it doesn't exist
        if (!analyserRef.current) {
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 256; // Smaller FFT for better performance
          analyserRef.current.smoothingTimeConstant = 0.5; // More responsive (lower = faster response)
        }

        // Create gain node if it doesn't exist
        if (!gainNodeRef.current) {
          gainNodeRef.current = audioContextRef.current.createGain();
          gainNodeRef.current.gain.value = isMuted ? 0 : 1;
        }

        // Create source node and connect: source -> analyser -> gain -> destination
        sourceNodeRef.current =
          audioContextRef.current.createMediaElementSource(audioElement);
        sourceNodeRef.current.connect(analyserRef.current);
        analyserRef.current.connect(gainNodeRef.current);
        gainNodeRef.current.connect(audioContextRef.current.destination);
      } catch (err) {
        console.error("Failed to initialize Web Audio API:", err);
      }
    },
    [isMuted],
  );

  // Analyze audio frequency data and detect beats for BPM
  const analyzeAudioFrequency = useCallback(() => {
    if (!analyserRef.current) return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);

    // BPM Detection - only if we haven't locked in a BPM yet
    if (
      bpmDetectionRef.current.isDetecting &&
      !bpmDetectionRef.current.lockedBPM
    ) {
      // Focus on bass frequencies (20-200Hz) for beat detection
      // With FFT size 256, bin 0-10 covers roughly 0-860Hz at 44.1kHz sample rate
      // We want bins 0-5 for bass emphasis
      const bassSlice = dataArray.slice(0, 5);
      const bassAvg =
        bassSlice.reduce((sum, val) => sum + val, 0) / bassSlice.length;

      // Beat threshold - detect when bass energy spikes above 180
      const beatThreshold = 180;
      const now = performance.now();

      if (bassAvg > beatThreshold) {
        const timestamps = bpmDetectionRef.current.beatTimestamps;

        // Avoid double-counting beats within 200ms
        const lastBeat = timestamps[timestamps.length - 1];
        if (!lastBeat || now - lastBeat > 200) {
          timestamps.push(now);

          // Calculate intervals between consecutive beats
          if (timestamps.length >= 2) {
            const interval =
              timestamps[timestamps.length - 1] -
              timestamps[timestamps.length - 2];
            bpmDetectionRef.current.intervals.push(interval);

            // Once we have 8-16 intervals, calculate BPM and lock it in
            if (bpmDetectionRef.current.intervals.length >= 8) {
              // Filter out outliers (keep middle 80% of intervals)
              const sorted = [...bpmDetectionRef.current.intervals].sort(
                (a, b) => a - b,
              );
              const trimCount = Math.floor(sorted.length * 0.1);
              const filtered = sorted.slice(
                trimCount,
                sorted.length - trimCount,
              );

              // Average the filtered intervals
              const avgInterval =
                filtered.reduce((sum, val) => sum + val, 0) / filtered.length;

              // Convert interval (ms) to BPM: BPM = 60000 / interval_ms
              const bpm = Math.round(60000 / avgInterval);

              // Lock in the BPM
              bpmDetectionRef.current.lockedBPM = bpm;
              bpmDetectionRef.current.isDetecting = false;
              setDetectedBPM(bpm);

              console.log(
                `BPM locked: ${bpm} (from ${bpmDetectionRef.current.intervals.length} beat intervals)`,
              );
            }
          }
        }
      }
    }

    // Continue analyzing while audio is playing
    if (songAudioRef.current && !songAudioRef.current.paused) {
      animationFrameRef.current = requestAnimationFrame(analyzeAudioFrequency);
    }
  }, []);

  // Start music visualization
  const startMusicVisualization = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    analyzeAudioFrequency();
  }, [analyzeAudioFrequency]);

  // Stop music visualization
  const stopMusicVisualization = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  // Handle mute toggle
  const handleMuteToggle = useCallback(() => {
    setIsMuted((prev) => {
      const newMuted = !prev;

      // Apply mute to TTS audio (Safari compatible)
      if (ttsAudioRef.current) {
        ttsAudioRef.current.muted = newMuted;
      }

      // Apply mute to song audio through Web Audio API gain node
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.value = newMuted ? 0 : 1;
      }

      // Also apply to the audio element as backup
      if (songAudioRef.current) {
        songAudioRef.current.muted = newMuted;
      }

      return newMuted;
    });
  }, []);

  // Move to next segment
  const moveToNextSegment = useCallback(() => {
    setCurrentSegmentIndex((prev) => {
      const next = (prev + 1) % modcastPlaylist.length;
      return next;
    });
  }, []);

  // Play intro segment (TTS)
  const playIntroSegment = useCallback(
    async (segment: ModcastSegment) => {
      if (!segment.introScript) return;

      setIsLoading(true);
      setError(null);
      setMode("talk");
      setCurrentInfo(`Introducing: ${segment.songTitle || "Next track"}...`);

      try {
        // Generate TTS audio
        const audioUrl = await generateTTS(segment.introScript);

        // Create and setup audio element
        const audio = new Audio(audioUrl);
        audio.muted = isMuted; // Apply current mute state
        ttsAudioRef.current = audio;

        // Start mouth animation when audio plays
        audio.onplay = () => {
          startMouthAnimation();
          setIsPlaying(true);
        };

        // Update info during playback
        audio.ontimeupdate = () => {
          // Additional sync could be added here
        };

        // When TTS ends, move to next segment
        audio.onended = () => {
          stopMouthAnimation();
          setIsPlaying(false);
          moveToNextSegment();
        };

        // Handle errors
        audio.onerror = () => {
          stopMouthAnimation();
          setError("Audio playback failed");
          setIsPlaying(false);
          setIsLoading(false);
        };

        setIsLoading(false);
        audio.play().catch((err) => {
          setError(`Playback failed: ${err.message}`);
          setIsPlaying(false);
          setIsLoading(false);
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to generate speech",
        );
        setIsLoading(false);
      }
    },
    [
      generateTTS,
      startMouthAnimation,
      stopMouthAnimation,
      moveToNextSegment,
      isMuted,
    ],
  );

  // Play song segment
  const playSongSegment = useCallback(
    (segment: ModcastSegment) => {
      if (!segment.audioFile) return;

      setMode("listenToMusic");
      setCurrentInfo(
        `Now playing: ${modcastPlaylist[currentSegmentIndex - 1]?.songTitle || "Music"}...`,
      );

      // Reset BPM detection for new song
      bpmDetectionRef.current = {
        isDetecting: true,
        beatTimestamps: [],
        intervals: [],
        lockedBPM: null,
      };

      // Create and setup audio element
      const audio = new Audio(segment.audioFile);
      songAudioRef.current = audio;

      // Apply current mute state
      audio.muted = isMuted;

      // Reset source node and gain node to allow reconnection for new audio element
      sourceNodeRef.current = null;
      gainNodeRef.current = null;

      // Initialize Web Audio API for visualization
      initAudioContext(audio);

      audio.onplay = async () => {
        // Resume AudioContext for iOS Safari compatibility
        if (
          audioContextRef.current &&
          audioContextRef.current.state === "suspended"
        ) {
          try {
            await audioContextRef.current.resume();
          } catch (err) {
            console.error("Failed to resume AudioContext:", err);
          }
        }
        setIsPlaying(true);
        startMusicVisualization();
      };

      audio.onended = () => {
        setIsPlaying(false);
        stopMusicVisualization();
        moveToNextSegment();
      };

      audio.onerror = () => {
        setError("Song playback failed");
        setIsPlaying(false);
        stopMusicVisualization();
      };

      audio.play().catch((err) => {
        setError(`Song playback failed: ${err.message}`);
        setIsPlaying(false);
        stopMusicVisualization();
      });
    },
    [
      currentSegmentIndex,
      isMuted,
      initAudioContext,
      startMusicVisualization,
      stopMusicVisualization,
      moveToNextSegment,
    ],
  );

  // Play current segment
  const playCurrentSegment = useCallback(() => {
    // Stop any currently playing audio
    if (ttsAudioRef.current) {
      ttsAudioRef.current.pause();
      ttsAudioRef.current = null;
    }
    if (songAudioRef.current) {
      songAudioRef.current.pause();
      songAudioRef.current = null;
    }
    stopMouthAnimation();

    // Play based on segment type
    if (currentSegment.type === "intro") {
      playIntroSegment(currentSegment);
    } else if (currentSegment.type === "song") {
      playSongSegment(currentSegment);
    }
  }, [currentSegment, playIntroSegment, playSongSegment, stopMouthAnimation]);

  // Handle play/pause toggle
  const handlePlayPause = useCallback(async () => {
    if (isPlaying) {
      // Pause
      if (ttsAudioRef.current) {
        ttsAudioRef.current.pause();
        stopMouthAnimation();
      }
      if (songAudioRef.current) {
        songAudioRef.current.pause();
        stopMusicVisualization();
      }
      setIsPlaying(false);
    } else {
      // Resume AudioContext for iOS Safari compatibility (must be in user interaction)
      if (
        audioContextRef.current &&
        audioContextRef.current.state === "suspended"
      ) {
        try {
          await audioContextRef.current.resume();
        } catch (err) {
          console.error("Failed to resume AudioContext:", err);
        }
      }

      // Resume or start
      if (ttsAudioRef.current && ttsAudioRef.current.paused) {
        ttsAudioRef.current.play();
        startMouthAnimation();
        setIsPlaying(true);
      } else if (songAudioRef.current && songAudioRef.current.paused) {
        songAudioRef.current.play();
        startMusicVisualization();
        setIsPlaying(true);
      } else {
        // Start from current segment
        playCurrentSegment();
      }
    }
  }, [
    isPlaying,
    playCurrentSegment,
    startMouthAnimation,
    stopMouthAnimation,
    startMusicVisualization,
    stopMusicVisualization,
  ]);

  // Handle skip to next segment
  const handleSkip = useCallback(() => {
    if (ttsAudioRef.current) {
      ttsAudioRef.current.pause();
      ttsAudioRef.current = null;
    }
    if (songAudioRef.current) {
      songAudioRef.current.pause();
      songAudioRef.current = null;
    }
    stopMouthAnimation();
    stopMusicVisualization();
    setIsPlaying(false);
    moveToNextSegment();
  }, [moveToNextSegment, stopMouthAnimation, stopMusicVisualization]);

  // Auto-play current segment when it changes (after initial mount)
  useEffect(() => {
    // Don't auto-play on initial mount, only on segment changes
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
    } else {
      playCurrentSegment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSegmentIndex]); // Only trigger on segment change

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (ttsAudioRef.current) {
        ttsAudioRef.current.pause();
        ttsAudioRef.current = null;
      }
      if (songAudioRef.current) {
        songAudioRef.current.pause();
        songAudioRef.current = null;
      }
      stopMouthAnimation();
      stopMusicVisualization();

      // Clean up Web Audio API resources
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close();
      }
    };
  }, [stopMouthAnimation, stopMusicVisualization]);

  return (
    <MuppetPodcaster
      mode={mode}
      mouthState={mouthState}
      bpm={detectedBPM}
      isMuted={isMuted}
      isPlaying={isPlaying}
      isLoading={isLoading}
      onMuteToggle={handleMuteToggle}
      onPlayPause={handlePlayPause}
      onSkip={handleSkip}
    />
  );
}

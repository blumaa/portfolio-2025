export interface ModcastSegment {
  type: 'intro' | 'song';
  songTitle?: string;
  artistName?: string;
  introScript?: string;
  audioFile?: string;
}

export const modcastPlaylist: ModcastSegment[] = [
  {
    type: 'intro',
    songTitle: '2 Hoots',
    artistName: 'The Mond Band',
    introScript: "Hey there, listeners! You've tuned into Modcast - the quirkiest radio show in the digital dimension! Coming up next, we've got an absolute banger for you. It's called 2 Hoots by Matt Edwards. Trust me folks, this one's gonna make your ears dance! Let's go!"
  },
  {
    type: 'song',
    audioFile: '/2hoots.mp3'
  },
  {
    type: 'intro',
    songTitle: 'Pollos v2',
    artistName: 'The Mond Band',
    introScript: "Wow! That was 2 Hoots, wasn't it amazing? Alright, alright, don't touch that dial because we're keeping this party rolling! Next up, we've got another incredible track - it's Pollos v2, also by Matt Edwards. This one's got a vibe that'll make you want to groove. Here we go!"
  },
  {
    type: 'song',
    audioFile: '/Pollos-v2.mp3'
  }
];

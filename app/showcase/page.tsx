"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../globals/projects";
import FloatingStepper from "../components/showcase/FloatingStepper";
import ProjectSection from "../components/showcase/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState<number[]>(
    new Array(projects.length).fill(0)
  );

  // Calculate progress for all sections based on scroll position
  const updateProgress = useCallback(() => {
    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;

    const newProgress: number[] = [];
    let newActiveIndex = 0;
    let closestDistance = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;

      // Progress = 1 when section top reaches viewport top (or above)
      // Progress = 0 when section top is at viewport bottom
      if (sectionTop <= 0) {
        // Section top has reached or passed viewport top - fully complete
        newProgress[index] = 1;
      } else {
        // Section is still below - calculate approach progress
        const approachProgress = 1 - sectionTop / window.innerHeight;
        newProgress[index] = Math.max(0, Math.min(1, approachProgress));
      }

      // Active section is the one whose top is closest to viewport top
      const distance = Math.abs(sectionTop);
      if (distance < closestDistance) {
        closestDistance = distance;
        newActiveIndex = index;
      }
    });

    setProgress(newProgress);
    setActiveIndex(newActiveIndex);
  }, []);

  // Set up scroll listener and GSAP snap
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Initial calculation
      updateProgress();

      // Listen for scroll
      window.addEventListener("scroll", updateProgress, { passive: true });

      // Create snap points for each section
      const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
      if (sections.length > 0) {
        ScrollTrigger.create({
          snap: {
            snapTo: (progress) => {
              const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrollY = progress * totalHeight;

              // If near the top of the page, allow scrolling to top (don't snap)
              const firstSectionTop = sections[0].offsetTop;
              if (scrollY < firstSectionTop / 2) {
                return 0; // Snap to very top
              }

              // Find the closest section top
              let closestIndex = 0;
              let closestDistance = Infinity;

              sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const distance = Math.abs(scrollY - sectionTop);

                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestIndex = index;
                }
              });

              // Return the snap position as a progress value (0-1)
              const targetSection = sections[closestIndex];
              const targetY = targetSection.offsetTop;
              return Math.max(0, Math.min(1, targetY / totalHeight));
            },
            duration: { min: 0.2, max: 0.6 },
            ease: "power2.inOut",
          },
        });
      }

      return () => {
        window.removeEventListener("scroll", updateProgress);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef, dependencies: [projects.length, updateProgress] }
  );

  // Handle stepper dot click - smooth scroll to section
  const handleDotClick = useCallback((index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 0 },
        ease: "power2.inOut",
      });
    }
  }, []);

  // Register ScrollToPlugin
  useEffect(() => {
    const loadScrollTo = async () => {
      const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
      gsap.registerPlugin(ScrollToPlugin);
    };
    loadScrollTo();
  }, []);

  return (
    <div
      ref={containerRef}
      className="showcase-container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Floating Stepper */}
      <FloatingStepper
        projects={projects}
        activeIndex={activeIndex}
        progress={progress}
        onDotClick={handleDotClick}
      />

      {/* Project Sections */}
      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          project={project}
          showDivider={index < projects.length - 1}
        />
      ))}
    </div>
  );
}

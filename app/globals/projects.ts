import { ReactElement } from "react";

export type ProjectCategory = "app" | "animation" | "creative" | "media";
export type PreviewType =
  | "iframe"
  | "storybook"
  | "gsap"
  | "video"
  | "image"
  | "multi-gsap"
  | "multi-iframe";

export interface AppVariant {
  id: string;
  name: string;
  tagline: string;
  url: string;
  previewUrl: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  featured?: boolean;

  // Header link - makes project name clickable
  link?: string;

  // Preview configuration
  previewType: PreviewType;
  previewUrl?: string;
  previewComponent?: string;
  previewComponents?: string[]; // For multi-gsap - multiple animations
  apps?: AppVariant[]; // For multi-iframe - multiple app variants
  thumbnail?: string;
  images?: string[]; // For image gallery preview

  // Footer links
  liveUrl?: string;
  liveUrlLabel?: string; // Custom label for live button (default: "View Live")
  githubUrl?: string;
  storybookUrl?: string;
  npmUrl?: string;

  techStack: string[];
  year: string;

  // Case study content (optional - for flagship projects)
  problem?: () => string | ReactElement;
  approach?: () => string | ReactElement;
  learnings?: () => string | ReactElement;
}

export const projects: Project[] = [
  // APPS (HIGH PRIORITY)
  {
    id: "mds",
    name: "Mond Design System",
    tagline: "A React component library with atomic design",
    description:
      "35+ accessible, themeable React components built with TypeScript and Vanilla Extract. Implements atomic design principles for maximum reusability and consistency.",
    category: "app",
    featured: true,
    link: "https://github.com/blumaa/mond-design-system",
    previewType: "iframe",
    previewUrl: "https://mond-design-system-component-lib.vercel.app/",
    storybookUrl: "https://mond-design-system-component-lib.vercel.app/",
    githubUrl: "https://github.com/blumaa/mond-design-system",
    npmUrl: "https://www.npmjs.com/package/@mond-design-system/theme",
    techStack: ["React", "TypeScript", "Storybook", "Vanilla Extract"],
    year: "2025",
    problem: () =>
      "After working on multiple projects, I kept rebuilding the same UI components from scratch. I needed a consistent, reusable system that enforced accessibility and design consistency across all my work.",
    approach: () =>
      "Built with atomic design principles - atoms (buttons, inputs) compose into molecules (form fields) and organisms (forms). Used Vanilla Extract for type-safe CSS-in-JS and Storybook for documentation and visual testing.",
    learnings: () =>
      "Publishing to npm taught me about package distribution and versioning. The design system now powers this portfolio and my other projects, dramatically speeding up development while maintaining consistency.",
  },
  {
    id: "xclues",
    name: "xclues",
    tagline: "Daily puzzle games for music, film, and literature",
    description:
      "A family of daily puzzle games where players guess songs, movies, and books from progressive clues. Built on a shared codebase, each game features streak tracking, social sharing, and a clean interface tailored to its medium.",
    category: "app",
    previewType: "multi-iframe",
    apps: [
      {
        id: "musiclues",
        name: "musiclues",
        tagline: "Guess the song from musical clues",
        url: "https://musiclues.space",
        previewUrl: "https://musiclues.space",
      },
      {
        id: "filmclues",
        name: "filmclues",
        tagline: "Guess the movie from visual clues",
        url: "https://filmclues.space",
        previewUrl: "https://filmclues.space",
      },
      {
        id: "litclues",
        name: "litclues",
        tagline: "Guess the book from literary clues",
        url: "https://litclues.space",
        previewUrl: "https://litclues.space",
      },
    ],
    githubUrl: "https://github.com/blumaa/xclues",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    year: "2025",
    problem: () =>
      "I wanted to create engaging daily games that bring people back each day, inspired by Wordle's simple but addictive format. After musiclues gained traction, users requested similar games for film and literature.",
    approach: () =>
      "Designed a shared codebase (xclues) that powers all three puzzle games. Each game shares the core mechanics while customizing clue presentation for its medium - audio snippets for music, visual clues for film, and text-based hints for literature.",
    learnings: () =>
      "Building for daily engagement taught me about user retention patterns. The shared architecture means each new variant takes days instead of weeks, and improvements to one app benefit all of them. Content curation proved as important as code - each medium requires carefully balanced, spoiler-free clues.",
  },

  // ANIMATIONS - All GSAP animations in one project
  {
    id: "animations",
    name: "Animations",
    tagline: "SVG animations and interactive elements",
    description:
      "A collection of animations built with GSAP and SVG - characters, scenes, UI elements, and interactive experiences.",
    category: "animation",
    previewType: "multi-gsap",
    previewComponents: [
      "OctoDude",
      "Bird",
      "Bus",
      "NoirCarChase",
      "CityScapeWrapper",
      "RustlingGrass",
      "AnimatedLoadingAirplane",
      "AnimatedEyeballWatching",
      "Modcast",
      "NuclearPhysics1",
      "Lighthouse",
    ],
    techStack: ["GSAP", "SVG", "React"],
    year: "2025",
  },

  // MEDIA
  {
    id: "television",
    name: "Television",
    tagline: "Video productions and puppetry",
    description:
      "Collection of video productions featuring puppetry and creative storytelling.",
    category: "media",
    link: "/television",
    previewType: "gsap",
    previewComponent: "Television",
    liveUrl: "/television",
    techStack: ["Video", "Puppetry", "Production"],
    year: "2025",
  },
];

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);

export const getFeaturedProject = () => projects.find((p) => p.featured);

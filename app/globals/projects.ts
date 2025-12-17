import { ReactElement } from "react";

export type ProjectCategory = "app" | "animation" | "creative" | "media";
export type PreviewType =
  | "iframe"
  | "storybook"
  | "gsap"
  | "video"
  | "image"
  | "multi-gsap";

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
    id: "musiclues",
    name: "musiclues.space",
    tagline: "Daily music puzzle game",
    description:
      "A daily puzzle game where players guess songs from musical clues. Features a clean interface, streak tracking, and social sharing.",
    category: "app",
    link: "https://musiclues.space",
    previewType: "iframe",
    previewUrl: "https://musiclues.space",
    liveUrl: "https://musiclues.space",
    liveUrlLabel: "Play",
    githubUrl: "https://github.com/blumaa/xclues",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    year: "2025",
    problem: () =>
      "I wanted to create an engaging daily game that brings people back each day, inspired by Wordle's simple but addictive format. Music felt like a natural fit for progressive clue revelation.",
    approach: () =>
      "Designed a shared codebase (xclues) that powers multiple puzzle games with different content types. Each game shares the core mechanics while customizing the clue presentation for its medium.",
    learnings: () =>
      "Building for daily engagement taught me about user retention patterns. The shared architecture made it easy to expand into film and literature variants without duplicating code.",
  },
  {
    id: "filmclues",
    name: "filmclues.space",
    tagline: "Daily film puzzle game",
    description:
      "A daily puzzle game where players guess movies from visual and textual clues. Sister app to musiclues.",
    category: "app",
    link: "https://filmclues.space",
    previewType: "iframe",
    previewUrl: "https://filmclues.space",
    liveUrl: "https://filmclues.space",
    liveUrlLabel: "Play",
    githubUrl: "https://github.com/blumaa/xclues",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    year: "2025",
    problem: () =>
      "After musiclues gained traction, users requested similar games for other media. Film was a natural next step - visual clues add a different puzzle-solving dimension.",
    approach: () =>
      "Leveraged the xclues shared codebase to spin up filmclues quickly. The main work was adapting the clue system for visual content and curating a diverse film database.",
    learnings: () =>
      "Proved the scalability of the shared architecture. Each new variant takes days instead of weeks, and improvements to one app benefit all of them.",
  },
  {
    id: "litclues",
    name: "litclues.space",
    tagline: "Daily literature puzzle game",
    description:
      "A daily puzzle game where players guess books from literary clues. Sister app to musiclues and filmclues.",
    category: "app",
    link: "https://litclues.space",
    previewType: "iframe",
    previewUrl: "https://litclues.space",
    liveUrl: "https://litclues.space",
    liveUrlLabel: "Play",
    githubUrl: "https://github.com/blumaa/xclues",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    year: "2025",
    problem: () =>
      "Literature lovers wanted their own version of the puzzle game. Books present unique challenges - clues need to work without spoiling plots while remaining recognizable to readers.",
    approach: () =>
      "Extended the xclues platform with literature-specific clue types: opening lines, author hints, and thematic clues. Focused on a mix of classics and contemporary works.",
    learnings: () =>
      "Content curation is as important as code. Working with book data required careful attention to spoiler-free clue design and balancing difficulty across different reader backgrounds.",
  },
  {
    id: "beth-shalom",
    name: "Beth Shalom Synagogue",
    tagline: "Community website redesign",
    description:
      "A modern, accessible website for Beth Shalom Synagogue featuring event calendars, member portals, and content management.",
    category: "app",
    link: "https://beth-shalom-fairfield.vercel.app/",
    previewType: "image",
    images: ["/images/bsf1.png", "/images/bsf2.png", "/images/bsf3.png"],
    liveUrl: "https://beth-shalom-fairfield.vercel.app/",
    techStack: ["Next.js", "React", "CMS"],
    year: "2023",
    problem: () =>
      "The synagogue's existing website was outdated and difficult to update. Community members struggled to find event information, and staff couldn't easily manage content without technical help.",
    approach: () =>
      "Collaborated directly with synagogue leadership to understand their needs. Built an accessible, mobile-friendly site with an intuitive CMS so non-technical staff can update events and content independently.",
    learnings: () =>
      "Working with a real community taught me to prioritize user needs over technical elegance. The most valuable features were often the simplest ones that saved staff time.",
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

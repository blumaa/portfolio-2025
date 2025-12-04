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
    previewType: "image",
    thumbnail: "/images/mds-preview.png",
    storybookUrl: "https://mond-design-system-component-lib.vercel.app/",
    githubUrl: "https://github.com/blumaa/mond-design-system",
    npmUrl: "https://www.npmjs.com/package/@mond-design-system/theme",
    techStack: ["React", "TypeScript", "Storybook", "Vanilla Extract"],
    year: "2025",
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

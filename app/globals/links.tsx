import {
  BuildingLibraryIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  DocumentPlusIcon
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Icon } from "@mond-design-system/theme";
import AnimatedMoon from "../animation-gallery/animations/AnimatedMoon";

type LinksType = Record<string, {
  title: string;
  icon: (isDarkMode: boolean) => ReactElement;
  href: string;
}>;

export const LINKS: LinksType = {
  work: {
    title: "work",
    icon: (isDarkMode: boolean) => (
      <Icon size="sm" isDarkMode={isDarkMode}>
        <WrenchScrewdriverIcon />
      </Icon>
    ),
    href: "/work",
  },
  education: {
    title: "education",
    icon: (isDarkMode: boolean) => (
      <Icon size="sm" isDarkMode={isDarkMode}>
        <BuildingLibraryIcon />
      </Icon>
    ),
    href: "/education",
  },
  creative: {
    title: "creative",
    icon: (isDarkMode: boolean) => (
      <Icon size="sm" isDarkMode={isDarkMode}>
        <PaintBrushIcon />
      </Icon>
    ),
    href: "/creative",
  },
  resources: {
    title: "resources",
    icon: (isDarkMode: boolean) => (
      <Icon size="sm" isDarkMode={isDarkMode}>
        <DocumentPlusIcon />
      </Icon>
    ),
    href: "/readings",
  },
  animationGallery: {
    title: "animations",
    icon: (isDarkMode: boolean) => (
      <div style={{ width: "1rem" }}>
        <AnimatedMoon />
      </div>
    ),
    href: "/animation-gallery",
  },
};

export const myStuffLinks = [
  "work",
  "education",
  "creative",
  "animationGallery",
];
export const goodStuffLinks = ["resources"];

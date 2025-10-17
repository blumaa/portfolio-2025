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
  icon: () => ReactElement;
  href: string;
}>;

export const LINKS: LinksType = {
  work: {
    title: "work",
    icon: () => (
      <Icon size="sm">
        <WrenchScrewdriverIcon />
      </Icon>
    ),
    href: "/work",
  },
  education: {
    title: "education",
    icon: () => (
      <Icon size="sm">
        <BuildingLibraryIcon />
      </Icon>
    ),
    href: "/education",
  },
  creative: {
    title: "creative",
    icon: () => (
      <Icon size="sm">
        <PaintBrushIcon />
      </Icon>
    ),
    href: "/creative",
  },
  resources: {
    title: "resources",
    icon: () => (
      <Icon size="sm">
        <DocumentPlusIcon />
      </Icon>
    ),
    href: "/readings",
  },
  animationGallery: {
    title: "animations",
    icon: () => (
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

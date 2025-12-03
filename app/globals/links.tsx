import {
  BuildingLibraryIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  DocumentPlusIcon,
  TvIcon
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
      <Icon size="xs">
        <WrenchScrewdriverIcon />
      </Icon>
    ),
    href: "/work",
  },
  education: {
    title: "education",
    icon: () => (
      <Icon size="xs">
        <BuildingLibraryIcon />
      </Icon>
    ),
    href: "/education",
  },
  creative: {
    title: "creative",
    icon: () => (
      <Icon size="xs">
        <PaintBrushIcon />
      </Icon>
    ),
    href: "/creative",
  },
  resources: {
    title: "resources",
    icon: () => (
      <Icon size="xs">
        <DocumentPlusIcon />
      </Icon>
    ),
    href: "/readings",
  },
  animationGallery: {
    title: "animations",
    icon: () => (
      <div style={{ width: "0.8rem" }}>
        <AnimatedMoon />
      </div>
    ),
    href: "/animation-gallery",
  },
  television: {
    title: "television",
    icon: () => (
      <Icon size="xs">
        <TvIcon />
      </Icon>
    ),
    href: "/television",
  },
};

export const myStuffLinks = [
  "work",
  "education",
  "creative",
  "animationGallery",
  "television",
];
export const goodStuffLinks = ["resources"];

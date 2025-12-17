import {
  UserIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  DocumentPlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Icon } from "@mond-design-system/theme";

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
  about: {
    title: "about",
    icon: () => (
      <Icon size="xs">
        <UserIcon />
      </Icon>
    ),
    href: "/about",
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
  showcase: {
    title: "showcase",
    icon: () => (
      <Icon size="xs">
        <SparklesIcon />
      </Icon>
    ),
    href: "/showcase",
  },
};

export const myStuffLinks = [
  "work",
  "showcase",
  "about",
];
export const goodStuffLinks = ["resources"];

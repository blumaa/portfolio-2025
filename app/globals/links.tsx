import {
  BuildingLibraryIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  DocumentPlusIcon
} from "@heroicons/react/24/solid";
import AnimatedMoon from "../animation-gallery/animations/AnimatedMoon";

const linkIconStyles = "h-4 w-4";

type LinksType = Record<string, Record<string, JSX.Element | string>>;

export const LINKS: LinksType = {
  work: {
    title: "work",
    icon: <WrenchScrewdriverIcon className={linkIconStyles} />,
    href: "/work",
  },
  education: {
    title: "education",
    icon: <BuildingLibraryIcon className={linkIconStyles} />,
    href: "/education",
  },
  creative: {
    title: "creative",
    icon: <PaintBrushIcon className={linkIconStyles} />,
    href: "/creative",
  },
  resources: {
    title: "resources",
    icon: <DocumentPlusIcon className={linkIconStyles} />,
    href: "/readings",
  },
  animationGallery: {
    title: "animations",
    icon: (
      <div className="w-4">
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

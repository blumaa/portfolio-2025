import {
  BuildingLibraryIcon,
  BookOpenIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
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
  books: {
    title: "books",
    icon: <BookOpenIcon className={linkIconStyles} />,
    href: "/books",
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

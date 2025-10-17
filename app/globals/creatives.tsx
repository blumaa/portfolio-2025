import { ReactElement } from "react";
import NextLink from "next/link";
import { Link } from "@mond-design-system/theme";

export type CreativeThing = {
  name: string;
  link?: string;
  linkTarget: "_blank" | "_self";
  description: () => string | ReactElement;
};
export const creatives: CreativeThing[] = [
  {
    name: "blumenous poetry",
    link: "https://desmondblume.substack.com/",
    linkTarget: "_blank",
    description: () =>
      "i love to write- stories, articles, essays- but i especially like to write poetry. a while ago i started a poetry substack (blog + email newsletter) under my pen name desmond blume.",
  },
  {
    name: "coding animations",
    link: "/animation-gallery",
    linkTarget: "_self",
    description: () =>
      "what happens when you combine code and animations? you get to have fun and make cool things! sometimes i go down animation rabbit holes using svgs and differrent coding libraries like framer-motion, gsap, or just regular old css keyframes",
  },
  {
    name: "banjo player",
    link: "#",
    linkTarget: "_self",
    description: () => (
      <>
        &nbsp;although i play guitar, and dabble in the fiddle, for a while i
        really became obsessed with playing the banjo and even joined a group
        called the&nbsp;
        <Link
          href="https://wildgoosechasecloggers.org/"
          target="_blank"
        >
          wild goose chase cloggers
        </Link>
        . we toured all around the great state of minnesota and one year we even
        got to tour in denmark and then in spain where we appeared on a&nbsp;
        <Link
          href="https://www.youtube.com/watch?v=fso_XZiJFDM&t=1s"
          target="_blank"
        >
          local television program
        </Link>
        ! here is an article i wrote while in the group:&nbsp;
        <Link
          href="https://wildgoosechasecloggers.org/wordpress/on-the-embedded-racism-of-some-old-time-tunes-by-aaron-blum/"
          target="_blank"
        >
          on the embedded racism of some old-time tunes
        </Link>
        .
      </>
    ),
  },
];

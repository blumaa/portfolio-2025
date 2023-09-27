export type CreativeThing = {
  name: string;
  link?: string;
  linkTarget: "_blank" | "_self";
  description: string;
};
export const creatives: CreativeThing[] = [
  {
    name: "blumenous poetry",
    link: "https://desmondblume.substack.com/",
    linkTarget: "_blank",
    description:
      "i love to write- stories, articles, essays- but i especially like to write poetry. a while ago i started a poetry substack (blog + email newsletter) under my pen name desmond blume.",
  },
  {
    name: "coding animations",
    link: "/animation-gallery",
    linkTarget: "_self",
    description:
      "what happens when you combine code and animations? you get to have fun and make cool things! sometimes i go down animation rabbit holes using svgs and differrent coding libraries like framer-motion, gsap, or just regular old css keyframes",
  },
];

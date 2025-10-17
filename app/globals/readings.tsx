export enum ReadingType {
  code = "code",
  poetry = "poetry",
  fiction = "fiction",
  nonFiction = "non-fiction",
}

export type Reading = {
  title: string;
  author?: string;
  link?: string;
  linkTarget?: "_blank" | "_self";
  description: string;
  type: ReadingType;
  imageUrl?: string;
};

export const readings: Reading[] = [
  {
    title: "Atomic Design",
    author: "Brad Frost",
    link: "https://atomicdesign.bradfrost.com/",
    linkTarget: "_blank",
    description:
      "This book is essential reading for frontend architecture and component design. It is something I will think about in every project in which I am invovled from here on out. If you are a designer, developer, or involved in application architecture in any way, I highly recommend it.",
    type: ReadingType.code,
    imageUrl: "/atomic-design.png",
  },
  {
    title: "The Primeagen",
    link: "https://www.youtube.com/@ThePrimeTimeagen",
    linkTarget: "_blank",
    description:
      "This is the guy who taught me how to Vim. He has excellent Neovim tutorials on his other Youtube channel (@ThePrimeagen). He drops wise words of wisdom about tech. I do not subscribe to him religiously but when I watch and listen to his videos I often find rich nuggets of wisdom. Not to mention his Vim skills are incredible.",
    type: ReadingType.code,
    imageUrl: "/primeagen.jpg",
  },
  {
    title: "Hard Fork",
    author: "Kevin Roose and Casey Newton",
    link: "https://www.nytimes.com/column/hard-fork",
    linkTarget: "_blank",
    description:
      "These guys are funny and they're funny while talking about tech. In the form of a podcast.",
    type: ReadingType.code,
    imageUrl: "/hard-fork.png",
  },
];

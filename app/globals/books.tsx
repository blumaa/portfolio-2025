export enum ReadingType {
  code = "code",
  poetry = "poetry",
  fiction = "fiction",
  nonFiction = "non-fiction",
}

export type Reading = {
  title: string;
  author: string;
  link?: string;
  linkTarget?: "_blank" | "_self";
  description: string;
  type: ReadingType;
  imageUrl: string;
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
];

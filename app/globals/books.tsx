export enum BookType {
  code = "code",
  poetry = "poetry",
  fiction = "fiction",
  nonFiction = "non-fiction",
}

export type Book = {
  title: string;
  author: string;
  link?: string;
  linkTarget?: "_blank" | "_self";
  description: string;
  type: BookType;
};

export const books: Book[] = [
  {
    title: "Atomic Design",
    author: "Brad Frost",
    link: "https://atomicdesign.bradfrost.com/",
    linkTarget: "_blank",
    description:
      "This book is the bible for frontend architecture and component design. It is something I will think about in every project in which I am invovled from here on out. If you are a designer, developer, or involved in application architecture in any way, I highly recommend it.",
    type: BookType.code,
  },
];

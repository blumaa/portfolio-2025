export type Education = {
  name: string;
  link?: string;
  linkTarget?: "_blank" | "_self";
  degree: string;
  graduationYear: string;
};
export const educations: Education[] = [
  {
    name: "flatiron school",
    link: "https://flatironschool.com/",
    linkTarget: "_blank",
    degree:
      "full stack web development - javascript and ruby immersive program",
    graduationYear: "2019",
  },
  {
    name: "university of minnesota",
    link: "https://twin-cities.umn.edu/",
    linkTarget: "_blank",
    degree: "masters of education - teaching english as a second language",
    graduationYear: "2015",
  },
  {
    name: "university of minnesota",
    link: "https://twin-cities.umn.edu/",
    linkTarget: "_blank",
    degree:
      "bachelor of arts - creative writing, english literature, and philosophy",
    graduationYear: "2007",
  },
];

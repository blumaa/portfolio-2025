export type Education = {
  name: string;
  link?: string;
  linkTarget?: "_blank" | "_self";
  degree: string;
  graduationYear: string;
};
export const educations: Education[] = [
  {
    name: "Flatiron School",
    link: "https://flatironschool.com/",
    linkTarget: "_blank",
    degree:
      "Full Stack Web Development - Javascript and Ruby immersive program",
    graduationYear: "2019",
  },
  {
    name: "University of Minnesota",
    link: "https://twin-cities.umn.edu/",
    linkTarget: "_blank",
    degree: "Masters of Education - Teaching English as a Second Language",
    graduationYear: "2015",
  },
  {
    name: "University of Minnesota",
    link: "https://twin-cities.umn.edu/",
    linkTarget: "_blank",
    degree:
      "Bachelor of Arts - Creative Writing, English Literature, and Philosophy",
    graduationYear: "2007",
  },
];

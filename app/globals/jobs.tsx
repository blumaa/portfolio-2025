import { HeartIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import NextLink from "next/link";
import { Link, Icon } from "@mond-design-system/theme";

export enum JobCategory {
  "coding" = "coding",
  "teaching" = "teaching",
  "coordinating" = "coordinating",
  "organising" = "organising",
}
export type Job = {
  companyName: string;
  link?: string;
  jobTitle: string;
  timeSpan: string;
  description: string;
  learning: () => string | ReactElement;
  location: string;
  category?: JobCategory;
};

export const jobs = [
  {
    companyName: "fluege",
    link: "https://go.fluege.de/",
    jobTitle: "frontend developer",
    timeSpan: "february 2024 - current",
    description: ": web-components + atomic design system = amazing developer experience (with flexibility, reusibiliity, scalability, and consistency)!",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : web-components.
      </>
    ),
    location: "remote / leipzig, germany",
    category: JobCategory.coding,
  },
  {
    companyName: "localyze",
    link: "https://localyze.com/",
    jobTitle: "frontend developer",
    timeSpan: "june 2022 - dec 2023",
    description:
      ": javascript frontend (react and nextJs), ruby on rails backend. coding to help automate the tasks of case managers who assisted employees in global mobility",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : it was so much fun helping to
        develop the design system:&nbsp;
        <Link
          href="https://github.com/Localitos/pluto"
          target="_blank"
        >
          pluto
        </Link>
        .
      </>
    ),
    location: "remote / hamburg, germany",
    category: JobCategory.coding,
  },
  {
    companyName: "x-ion",
    link: "https://www.x-ion.de/",
    jobTitle: "junior frontend developer",
    timeSpan: "june 2020 - february 2022",
    description:
      ": frontend coding to automate large scale health insurance applications",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : i really honed my&nbsp;
        <Link
          as={NextLink}
          href="/animation-gallery"
        >
          animation skills
        </Link>
        .
      </>
    ),
    location: "remote / hamburg, germany",
    category: JobCategory.coding,
  },
  {
    companyName: "south high school",
    link: "https://south.mpls.k12.mn.us/",
    jobTitle: "teacher - english as a second language (esl)",
    timeSpan: "october 2016 - june 2019",
    description:
      ": wrote, designed, and taught 10th, 11th, and 12th grade curriculum oriented towards racial and social justice." +
      " helped over 1000 students learn english as a second language. coordinated a team of 10 teachers." +
      " boosted the level of cultural relevance using 21st century apps and technology",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : this was both the most rewarding
        and the most stressful job of my life.
      </>
    ),
    location: "minneaplis, minnesota, usa",
    category: JobCategory.teaching,
  },
  {
    companyName: "minneapolis public schools",
    link: "https://commed.mpls.k12.mn.us/",
    jobTitle: "project specialist - community education",
    timeSpan: "september 2012 - 2014",
    description:
      ": helped to coordinate after school programming for thousands of children in the minneapolis area. " +
      "maintained, updated, and developed the community education websites",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : it was my honour to meet, be
        mentored by, and work with the greatly inspirational artist:&nbsp;
        <Link
          href="https://www.candidagonzalez.com/"
          target="_blank"
        >
          c&#225;ndida gonz&#225;lez
        </Link>
        .
      </>
    ),
    location: "minneaplis, minnesota, usa",
    category: JobCategory.coordinating,
  },
  {
    companyName: "powderhorn porchfest",
    link: "https://www.ppna.org/porchfest",
    jobTitle: "co-founder and organiser",
    timeSpan: "2012 - 2014",
    description:
      ": together with niky duxbury, we founded powderhorn porchfest- a free, neighborhood based music festival that brought people together and highlighted local musicians, food vendors, and artists. it's still going strong to this day",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : seeing the community come out and
        gather in the streets to hear a lot of great local music.
      </>
    ),
    location: "minneaplis, minnesota, usa",
    category: JobCategory.organising,
  },
  {
    companyName: "americorps promise fellow",
    link: "https://mnyouth.net/americorps/join-the-corps/the-pf-experience/",
    jobTitle: "art teacher",
    timeSpan: "october 2011 - 2012",
    description: ": designed and implemented art oriented curriculum for youth",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : together, with the students, built
        an enormous robot sculpture using only recycled materials and we had two
        pet rats in the classroom.
      </>
    ),
    location: "minneaplis, minnesota, usa",
    category: JobCategory.teaching,
  },
  {
    companyName: "colegio carlos tercero",
    link: "https://conversaspain.com/auxiliares-de-conversacion/",
    jobTitle: "english teacher",
    timeSpan: "september 2009 - 2011",
    description:
      ": served as lead english teacher, helping to improve the language skills of students",
    learning: () => (
      <>
        <Icon size="sm">
          <HeartIcon />
        </Icon>
        : i got to act in a pantomime! i
        also got to walk the camino de santiago- a life changing experience!
      </>
    ),
    location: "aranjuez, madrid, spain",
    category: JobCategory.teaching,
  },
];

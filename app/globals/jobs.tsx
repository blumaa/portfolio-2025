import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

export type Job = {
  companyName: string;
  link?: string;
  jobTitle: string;
  timeSpan: string;
  description: string;
  learning: string | JSX.Element;
  location: string;
};
export const jobs = [
  {
    companyName: "localyze",
    link: "https://localyze.com/",
    jobTitle: "frontend developer",
    timeSpan: "june 2022 - present",
    description:
      "javascript fe (react and nextJs), ruby be. coding to help automate the tasks of case managers who assisted employees in global mobility",
    learning: (
      <>
        <HeartIcon className="h-4 inline" />: it was so much fun helping to develop our
        design system:&nbsp;
        <Link
          href="https://github.com/Localitos/pluto"
          target="_blank"
          className="underline-offset-1 decoration-sky-500 underline hover:no-underline cursor-pointer"
        >
          pluto
        </Link>.
      </>
    ),
    location: "remote / hamburg, germany",
  },
  {
    companyName: "x-ion",
    link: "https://www.x-ion.de/",
    jobTitle: "junior frontend developer",
    timeSpan: "june 2020 - february 2022",
    description:
      "frontend coding to automate large scale health insurance applications",
    learning: (
      <>
        <HeartIcon className="h-4 inline" />: i really honed my&nbsp;
        <Link
          href="/animation-gallery"
          target="_self"
          className="underline-offset-1 decoration-sky-500 underline hover:no-underline cursor-pointer"
        >
          animation skills
        </Link>.
      </>
    ),
    location: "remote / hamburg, germany",
  },
  {
    companyName: "south high school",
    link: "https://south.mpls.k12.mn.us/",
    jobTitle: "teacher - english as a second language (esl)",
    timeSpan: "october 2016 - june 2019",
    description:
      "wrote, designed, and taught 10th, 11th, and 12th grade curriculum oriented towards racial and social justice." +
      " helped over 1000 students learn english as a second language. coordinated a team of 10 teachers." +
      " boosted the level of cultural relevance using 21st century apps and technology",
    learning: (
      <>
        <HeartIcon className="h-4 inline" />: this was both the most rewarding
        and the most stressful job of my life.
      </>
    ),
    location: "minneaplis, minnesota, usa",
  },
];

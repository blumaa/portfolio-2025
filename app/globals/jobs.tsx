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
      "frontend coding to help automate the tasks of case managers who assisted employees in global mobility",
    learning: (
      <>
        <div>
          <HeartIcon className="h-4" />
        </div>
        <div>
          : it was so much fun developing our design system,&nbsp;
          <Link
            href="https://github.com/Localitos/pluto"
            target="_blank"
            className="underline-offset-1 decoration-sky-500 underline hover:no-underline cursor-pointer"
          >
            pluto
          </Link>
        </div>
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
        <HeartIcon className="h-4 w-4" />: i really honed my animation skills
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
        <HeartIcon className="h-4 w-4" />: i really honed my animation skills
      </>
    ),
    location: "remote / hamburg, germany",
  },
];

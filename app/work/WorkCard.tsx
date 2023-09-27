"use client";

import { useThemeContext } from "../context/theme";
import Link from "next/link";
import { Job } from "../globals/jobs";

const WorkCard = ({ job }: { job: Job }) => {
  const {
    companyName,
    link,
    jobTitle,
    timeSpan,
    description,
    learning,
    location,
  } = job;
  const { isDarkMode } = useThemeContext();

  return (
    <div
      className={`flex border border-gray-200 
        rounded-lg shadow md:flex-row ${
          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
        }`}
    >
      <div className="p-4">
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className="font-bold text-xl hover:decoration-sky-500 underline-offset-1 hover:underline"
        >{`${companyName} `}</Link>
        <p>{`${jobTitle} `}</p>

        <div>{`${location}. `}</div>
        <div className="pb-2">{`${timeSpan}`}</div>
        <div className="pb-2 max-w-sm leading-4">{`${description}. `}</div>
        <div className="flex leading-4">
          {typeof learning === "string" ? `${learning}` : learning}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

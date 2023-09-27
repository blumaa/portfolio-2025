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

  return (
    <div
      className={`flex  border-gray-200 
        rounded-lg  w-full md:w-2/3 `}
    >
      <span className="p-2">
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className={`font-bold text-l decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
        >{`${companyName}`}</Link>
        {` ${jobTitle}, `}
        {`${location}, `}
        {`${timeSpan}. `}
        {`${description}. `}
        {typeof learning === "string" ? `${learning}` : learning}
      </span>
    </div>
  );
};

export default WorkCard;

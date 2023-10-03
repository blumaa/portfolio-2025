import Link from "next/link";
import { Job } from "../globals/jobs";
import Pill from "../components/Pill";

const WorkCard = ({ job }: { job: Job }) => {
  const {
    companyName,
    category,
    link,
    jobTitle,
    timeSpan,
    description,
    learning,
    location,
  } = job;

  return (
    <div
      className={`flex border-gray-200 px-2
        rounded-lg w-full md:w-2/3 `}
    >
      <span>
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className={`font-bold text-xl decoration-sky-500 underline underline-offset-2 
            hover:no-underline`}
        >{`${companyName}`}</Link>
        {` ${jobTitle}, `}
        {`${location}, `}
        {`${timeSpan}. `}
        {`${description}. `}
        {typeof learning === "string" ? `${learning}` : learning}{" "}
        {category && <Pill>{category}</Pill>}
      </span>
    </div>
  );
};

export default WorkCard;

import Link from "next/link";
import { motion } from "framer-motion";
import { Job, iconStyles } from "../globals/jobs";
import Pill from "../components/Pill";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex border-gray-200 px-2
      rounded-lg w-full md:w-2/3 `}
    >
      <span>
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className={`font-bold text-xl decoration-sky-500 underline underline-offset-2 
            hover:no-underline mr-1`}
        >{`${companyName}`}</Link>
        <Pill>{jobTitle}</Pill>
        {` ${location}, `}
        {`${timeSpan}. `}
        <WrenchScrewdriverIcon className={iconStyles} />
        {`${description}. `}
        {typeof learning === "string" ? `${learning}` : learning}{" "}
      </span>
    </motion.div>
  );
};

export default WorkCard;

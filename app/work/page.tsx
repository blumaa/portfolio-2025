import WorkCard from "./WorkCard";
import { jobs } from "../globals/jobs";

export default function Work() {
  return (
    <div className="flex flex-col items-center space-y-4 pt-4">
      <div
        className={`flex  border-gray-200 
        rounded-lg  w-full md:w-2/3 `}
      >
        <div>
          <p className="pb-1 pl-6 pr-6">
            i put a little bit of illustration into my creative writing, a little
            bit of creative writing into my music, a little bit of music into
            my teaching, and a whole lot of all of these crafts into coding.
          </p>
        </div>
      </div>
      <div className="border self-center border-sky-500 mb-2 w-1/6" />
      {jobs.map((job) => (
        <WorkCard key={job.companyName} job={job} />
      ))}
    </div>
  );
}

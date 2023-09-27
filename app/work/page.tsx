import WorkCard from "./WorkCard";
import { jobs } from "../globals/jobs";

export default function Work() {
  return (
    <div className="flex flex-col items-center space-y-4 pt-4">
      {jobs.map((job) => (
        <WorkCard key={job.companyName} job={job} />
      ))}
    </div>
  );
}

import { educations } from "../globals/education";
import Link from "next/link";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <>
      <div className="flex flex-col items-start space-y-2 pt-4 ">
        {educations.map((school) => (
          <EducationCard key={school.name} school={school} />
        ))}
        <div className="border self-center border-sky-500 mb-2 w-1/6" />
        <div className={`flex`}>
          <span className="p-2">
            <Link
              href={"#"}
              target="_self"
              className={`font-bold text-l decoration-sky-500 underline underline-offset-1 
          hover:no-underline`}
            >
              languages
            </Link>
            &nbsp; native english - spanish c1 - german b1.2
          </span>
        </div>
      </div>
    </>
  );
}

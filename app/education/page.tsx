import { educations } from "../globals/education";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 pt-4 pb-4">
        {educations.map((school) => (
          <EducationCard key={school.name} school={school} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center items-center w-1/2">
          <div className={`flex justify-center w-full md:w-1/2 `}>
            <span className="p-2">english native</span>
          </div>
          <div className={`flex justify-center w-full md:w-1/2 `}>
            <span className="p-2">spanish C1</span>
          </div>
          <div className={`flex justify-center w-full md:w-1/2 `}>
            <span className="p-2">german a2.1</span>
          </div>
        </div>
      </div>
    </>
  );
}

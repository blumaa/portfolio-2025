import { educations } from "../globals/education";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div className="flex flex-col items-center space-y-2 pt-4">
      {educations.map((school) => (
        <EducationCard key={school.name} school={school} />
      ))}
    </div>
  );
}

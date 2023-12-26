import { readings } from "../globals/books";
import ReadingCard from "./ReadingCard";

export default function Books() {
  return (
    <div className="pt-4 ">
      {/* <div className="flex flex-col items-center justify-center pb-4"> */}
      {/*   Here are some books and readings that I have really enjoyed. */}
      {/* </div> */}
      <div className="flex flex-col items-center justify-center space-y-2">
        {readings.map((reading) => (
          <ReadingCard key={reading.title} reading={reading} />
        ))}
      </div>
    </div>
  );
}

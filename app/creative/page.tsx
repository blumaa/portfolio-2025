import { creatives } from "../globals/creatives";
import CreativeCard from "./CreativeCard";

export default function Work() {
  return (
    <div className="flex flex-col items-center space-y-4 pt-4">
      {creatives.map((thing) => (
        <CreativeCard key={thing.name} creativeThing={thing} />
      ))}
    </div>
  );
}

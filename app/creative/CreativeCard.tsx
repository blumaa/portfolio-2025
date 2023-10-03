import Link from "next/link";
import { CreativeThing } from "../globals/creatives";

const CreativeCard = ({ creativeThing }: { creativeThing: CreativeThing }) => {
  const { name, link, linkTarget, description } = creativeThing;

  return (
    <div
      className={`flex  border-gray-200 
        rounded-lg  w-full md:w-2/3 `}
    >
      <span className="p-2">
        <Link
          href={link || "#"}
          target={linkTarget}
          className={`font-bold text-l decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
        >{`${name}`}</Link>
        {typeof description === "string" ? ` ${description}` : description}
      </span>
    </div>
  );
};

export default CreativeCard;

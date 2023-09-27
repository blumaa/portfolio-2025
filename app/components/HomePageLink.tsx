import Link from "next/link";
import { LINKS } from "../globals/links";

const HomePageLink = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center space-x-2">
      {LINKS[name].icon}
      <Link href={`${LINKS[name].href}`}>
        <div
          className={`underline-offset-1 decoration-sky-500 underline 
            hover:no-underline cursor-pointer`}
        >
          {LINKS[name].title}
        </div>
      </Link>
    </div>
  );
};

export default HomePageLink;

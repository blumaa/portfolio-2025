import Link from "next/link";
import { Reading } from "../globals/books";
import Image from "next/image";

const ReadingCard = ({ reading }: { reading: Reading }) => {
  const { title, link, linkTarget, author, description, type, imageUrl } = reading;

  return (
    <Link
      href={link || "#"}
      target={linkTarget}
      className="md:w-1/2 border border-gray-500 p-2 rounded-sm shadow-md hover:scale-105 ease-out duration-300"
    >
      <div>
        <div className={`flex justify-center`}>
          <div className="flex items-center justify-center space-x-6">
            {imageUrl && <Image src={imageUrl} alt={title} width={100} height={100} />}
            <div className="flex flex-col basis-1/3">
              <div
                className={`font-bold text-2xl decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
              >{`${title}`}</div>
              {author && <span>{author}</span>}
            </div>
            {/* <div>pic</div> */}
          </div>
          <div className="flex basis-2/3 items-center">{description}</div>
        </div>
        {/* <div className="flex justify-end pt-2 pr-2"> */}
        {/*   <Pill>{type}</Pill> */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default ReadingCard;

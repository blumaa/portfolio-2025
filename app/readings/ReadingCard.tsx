import Link from "next/link";
import { Reading } from "../globals/books";
import Image from "next/image";

const ReadingCard = ({ reading }: { reading: Reading }) => {
  const { title, link, linkTarget, author, description, type, imageUrl } = reading;

  return (
    <Link
      href={link || "#"}
      target={linkTarget}
      className="md:w-1/2 border border-gray-500 rounded-sm shadow-md hover:scale-105 ease-out duration-300 px-2"
    >
      <div className="flex flex-col">
        <div className="flex pt-2 items-end">
          <div className="">
            {imageUrl && <Image src={imageUrl} alt={title} width={100} height={100} className="max-w-none overflow-hidden" />}
          </div>
          <div className="p-2 flex justify-center flex-col">
            <div
              className="font-bold text-2xl decoration-sky-500 underline underline-offset-1 
                  hover:no-underline"
            >{title}</div>
            <span className="">
              {author && <span>{author}</span>}
            </span>
          </div>
        </div>
        <div className="py-2 ">{description}</div>
      </div>
    </Link>
  );
};

export default ReadingCard;

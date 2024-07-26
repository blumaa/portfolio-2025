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
        <div className="grid grid-cols-4 items-center justify-items-center gap-2">
          <div className="border border-yellow-400">
            {imageUrl && <Image src={imageUrl} alt={title} width={100} height={100} />}
          </div>
          <div>
            <div
              className="font-bold text-2xl decoration-sky-500 underline underline-offset-1 
                hover:no-underline"
            >{title}</div>
            {author && <span>{author}</span>}
          </div>
          <div className="col-span-2">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ReadingCard;

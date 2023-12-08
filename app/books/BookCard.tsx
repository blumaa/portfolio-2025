import Link from "next/link";
import { Book } from "../globals/books";
import Pill from "../components/Pill";

const BookCard = ({ book }: { book: Book }) => {
  const { title, link, linkTarget, author, description, type } = book;

  return (
    <Link
      href={link || "#"}
      target={linkTarget}
      className="w-9/12 border border-sky-500 rounded-lg p-6 hover:scale-105 ease-out duration-300"
    >
      <div>
        <div className={`flex justify-around`}>
          <div className="flex">
            <div className="flex flex-col">
              <div
                className={`font-bold text-2xl decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
              >{`${title}`}</div>
              <span className="mb-2">{author}</span>
            </div>
            {/* <div>pic</div> */}
          </div>
          <div className="w-3/5">{description}</div>
        </div>
        <div className="flex justify-end pt-2 pr-2">
          <Pill>{type}</Pill>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

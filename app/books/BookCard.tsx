import Link from "next/link";
import { Book } from "../globals/books";
import Pill from "../components/Pill";

const BookCard = ({ book }: { book: Book }) => {
  const { title, link, linkTarget, author, description, type } = book;

  return (
    <Link
      href={link || "#"}
      target={linkTarget}
      className="md:w-1/2 border border-sky-500 p-2 rounded-lg shadow-lg hover:scale-105 ease-out duration-300"
    >
      <div>
        <div className={`flex space-x-4 justify-center`}>
          <div className="flex items-center justify-center">
            <div className="flex flex-col basis-1/2">
              <div
                className={`font-bold text-2xl decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
              >{`${title}`}</div>
              <span>{author}</span>
            </div>
            {/* <div>pic</div> */}
          </div>
          <div className="flex basis-2/3">{description}</div>
        </div>
        {/* <div className="flex justify-end pt-2 pr-2"> */}
        {/*   <Pill>{type}</Pill> */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default BookCard;

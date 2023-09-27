import { BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import LightSwitch from "../components/LightSwitch";

export default function EducationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const navHomeText = "aaron blum";
  return (
    <section>
      <nav>
        <div className="flex items-center justify-between">
          <Link className="pl-2 md:text-xl w-3/12 md:w-1/3" href="/">
            {navHomeText}
          </Link>
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="h-6 w-6" />
            <div className="text-2xl">books</div>
          </div>
          <div className="flex justify-end w-3/12 md:w-1/3">
            <LightSwitch />
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </section>
  );
}

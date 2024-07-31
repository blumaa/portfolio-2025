import { BookOpenIcon, DocumentPlusIcon } from "@heroicons/react/24/solid";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export default function BooksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <div className="flex items-center">
          <DocumentPlusIcon className="h-6 w-6" />
          <div className="text-2xl">Resources</div>
        </div>
      </Header>
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import Image from 'next/image'
import { BookOpenIcon, PaintBrushIcon, PencilIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const myStuffLinks = ["work", "writing", "creative"]
const goodStuffLinks = ["books"]

const linkIconStyles = "h-4 w-4"

type LinksType = Record<string, Record<string, JSX.Element | string>>

const LINKS: LinksType = {
  work: {
    title: "work",
    icon: <WrenchScrewdriverIcon className={linkIconStyles} />,
    href: "/work"
  },
  writing: {
    title: "writing",
    icon: <PencilIcon className={linkIconStyles} />,
    href: "/writing"
  },
  creative: {
    title: "creative",
    icon: <PaintBrushIcon className={linkIconStyles} />,
    href: "/creative"
  },
  books: {
    title: "books",
    icon: <BookOpenIcon className={linkIconStyles} />,
    href: "/books"
  }
}

const customLink = ({ name }: { name: string; }) => {
  return (
    <div className="flex items-center space-x-2">
      {LINKS[name].icon}
      <Link href={`${LINKS[name].href}`} >
        <div className="underline-offset-1 decoration-sky-500 underline hover:no-underline cursor-pointer">{LINKS[name].title}</div>
      </Link>
    </div>
  )
}

export default function Home() {
  const title = "aaron blum";

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="flex-col items-center justify-center">
        <div className="flex-col items-center justify-center pb-4">
          <div className="text-4xl">{title}</div>
        </div>
        <div className="flex pb-4">
          <div className="flex-col items-center justify-center">
            <div className="text-xl">my stuff</div>
            <div className="flex-col">
              {myStuffLinks.map((link) => {
                return customLink({ name: link })
              })}
            </div>
          </div>
          <div className="p-6" />
          <div className="flex-col ">
            <div className="text-xl">good stuff</div>
            {goodStuffLinks.map((link) => {
              return customLink({ name: link })
            })}
          </div>
        </div>
        <div className="border border-slate-300 mb-2" />

        <div className="flex space-x-2 w-1/2">
          <Link href="https://www.linkedin.com/in/aaron-blum-0904/" target="_blank">
            <Image
              src="/linkedin-logo.svg"
              width={20}
              height={20}
              alt="Aaron Blum's LinkedIn"
            />
          </Link>
          <Link href="https://github.com/blumaa" target="_blank">
            <Image
              src="/github-logo.svg"
              width={20}
              height={20}
              alt="Aaron Blum's Github"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

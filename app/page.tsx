import Link from "next/link";
import Image from "next/image";
import LightSwitch from "./components/LightSwitch";
import { LINKS } from "./globals/links";

const myStuffLinks = ["work", "education", "creative"];
const goodStuffLinks = ["books"];

const customLink = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center space-x-2">
      {LINKS[name].icon}
      <Link href={`${LINKS[name].href}`}>
        <div className="underline-offset-1 decoration-sky-500 underline hover:no-underline cursor-pointer">
          {LINKS[name].title}
        </div>
      </Link>
    </div>
  );
};

export default function Home() {
  const title = "aaron blum";

  return (
    <>
      <div className="flex justify-end pt-1">
        <LightSwitch />
      </div>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex-col items-center justify-center">
          <div className="flex-col items-center justify-center pb-4">
            <div className="text-4xl">{title}</div>
          </div>
          <div className="md:flex md:space-x-4 pb-4">
            <div className="flex-col items-center justify-center">
              <div className="text-xl">my stuff</div>
              <div className="flex-col">
                {myStuffLinks.map((link) => {
                  return customLink({ name: link });
                })}
              </div>
            </div>
            <div className="flex-col ">
              <div className="text-xl">good stuff</div>
              {goodStuffLinks.map((link) => {
                return customLink({ name: link });
              })}
            </div>
          </div>
          <div className="border border-slate-300 mb-2" />

          <div className="flex space-x-2 w-1/2">
            <Link
              href="https://www.linkedin.com/in/aaron-blum-0904/"
              target="_blank"
            >
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
            <Link
              href="https://desmondblume.substack.com/"
              target="_blank"
            >
              <Image
                src="/substack-logo.svg"
                width={20}
                height={20}
                alt="Blumenous Poetry"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

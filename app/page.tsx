import Link from "next/link";
import Image from "next/image";
import LightSwitch from "./components/LightSwitch";
import HomePageLink from "./components/HomePageLink";

const myStuffLinks = ["work", "education", "creative"];
const goodStuffLinks = ["books"];

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-none justify-end pt-1">
        <LightSwitch />
      </div>
      <main className="grow flex items-center justify-center">
        <div className="flex-col items-center justify-center">
          <div className="flex-col items-center justify-center pb-4">
            <div className="text-4xl">aaron blum</div>
          </div>
          <div className="md:flex md:space-x-4 pb-4">
            <div className="flex-col items-center justify-center">
              <div className="text-xl">my stuff</div>
              <div className="flex-col">
                {myStuffLinks.map((link) => (
                  <HomePageLink key={link} name={link} />
                ))}
              </div>
            </div>
            <div className="flex-col ">
              <div className="text-xl">good stuff</div>
              {goodStuffLinks.map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
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
            <Link href="https://desmondblume.substack.com/" target="_blank">
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
    </div>
  );
}

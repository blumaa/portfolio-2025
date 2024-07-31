import { DM_Sans } from "next/font/google";
import LightSwitch from "./components/LightSwitch";
import HomePageLink from "./components/HomePageLink";
import SocialLink from "./components/SocialLink";
import { Footer } from "./footer/footer";
import { goodStuffLinks, myStuffLinks } from "./globals/links";

const dmSans = DM_Sans({
  weight: '400',
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={dmSans.className}>
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
              <SocialLink
                href="https://www.linkedin.com/in/aaron-blum-0904/"
                src="/linkedin-logo.svg"
                alt="LinkedIn"
              />
              <SocialLink
                href="https://github.com/blumaa"
                src="/github-logo.svg"
                alt="Github"
              />
              <SocialLink
                href="https://desmondblume.substack.com/"
                src="/substack-icon.svg"
                alt="Blumenous Poetry"
              />
              <SocialLink
                href="mailto:blumaa@gmail.com"
                src="/mail.svg"
                alt="blumaa@gmail.com"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

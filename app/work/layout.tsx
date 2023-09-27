import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import LightSwitch from "../components/LightSwitch";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const navHomeText = "aaron blum";
  return (
    <section>
      <nav>
        <div className="flex items-center justify-between">
          <div className="w-40">
            <Link className="pl-4 text-xl" href="/">
              {navHomeText}
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <WrenchScrewdriverIcon className="h-6 w-6" />
            <div className="text-2xl">Work</div>
          </div>
          <div className="flex justify-end w-40">
            <LightSwitch />
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </section>
  );
}

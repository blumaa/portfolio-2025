"use client";

import { useState } from "react";

import { LightBulbIcon } from "@heroicons/react/24/outline";
import {
  LightBulbIcon as DarkModeLightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navHomeText = "aaron blum";
  return (
    <section>
      <nav>
        <div className="flex items-center justify-between pt-2">
          <Link className="pl-4 text-xl" href="/">
            {navHomeText}
          </Link>
          <div className="flex items-center space-x-2">
            <WrenchScrewdriverIcon className="h-6 w-6" />
            <div className="text-2xl">Work</div>
          </div>
          <div className="pr-4">
            <DarkModeLightBulbIcon
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`transition ease-in-out delay-150 h-5 w-6 ${
                isDarkMode ? "text-black-500" : "text-yellow-500"
              } hover:cursor-pointer`}
            />
            {/* {!isDarkMode ? (<LightBulbIcon onClick={() => setIsDarkMode(!isDarkMode)} className="h-5 w-6 text-yellow-400 hover:cursor-pointer" />) : (<DarkModeLightBulbIcon onClick={() => setIsDarkMode(!isDarkMode)} className="h-6 w-6 hover:cursor-pointer" />)} */}
          </div>
        </div>
      </nav>
      <div className="pl-4">{children}</div>
    </section>
  );
}

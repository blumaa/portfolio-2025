"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "../header/header";
import { goodStuffLinks, myStuffLinks } from "../globals/links";
import HomePageLink from "../components/HomePageLink";

const Stage = () => {
  return (
    <>
      <Header>Stage</Header>
      <div className="p-4 h-full flex items-center justify-center ">
        <div className="group relative">
          <Link className="pl-2 md:text-xl w-3/12 md:w-1/3" href="/">
            aaron blum
          </Link>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              exit={{ opacity: 0 }}
              className={`absolute w-32 left-3 top-6 scale-0 
              rounded  p-2 text-xs text-white 
              group-hover:scale-100 z-50 flex flex-col`}
            >
              {[...myStuffLinks, ...goodStuffLinks].map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
export default Stage;

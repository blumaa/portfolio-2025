"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { goodStuffLinks, myStuffLinks } from "../globals/links";
import HomePageLink from "../components/HomePageLink";
import { useThemeContext } from "../context/theme";

const HeaderMenu = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <div className="group relative">
      <Link className="pl-2 md:text-xl " href="/">
        aaron blum
      </Link>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className={`absolute w-32 left-3 top-6 scale-0 
              rounded text-xs group-hover:scale-100 z-50 flex flex-col
              ${
                isDarkMode
                  ? `bg-[#27374D] text-[#DDE6ED]/90`
                  : `bg-[#F2F3F4] text-[#414A4C]`
              }

              `}
        >
          {[...myStuffLinks, ...goodStuffLinks].map((link) => (
            <HomePageLink key={link} name={link} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderMenu;

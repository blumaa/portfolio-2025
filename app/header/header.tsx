import Link from "next/link";
import LightSwitch from "../components/LightSwitch";
import HeaderMenu from "./HeaderMenu";

const navHomeText = "aaron blum";
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <HeaderMenu />
        <div className="flex items-center space-x-2">{children}</div>
        <div className="flex justify-end w-3/12 md:w-1/3">
          <LightSwitch />
        </div>
      </div>
    </nav>
  );
};

export { Header };

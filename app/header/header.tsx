import LightSwitch from "../components/LightSwitch";
import HeaderMenu from "./HeaderMenu";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="flex items-center justify-between">
      <HeaderMenu />
      <div className="flex items-center space-x-2">
        {children}
      </div>
      <LightSwitch />
    </nav>
  );
};

export { Header };

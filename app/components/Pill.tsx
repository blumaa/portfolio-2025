const Pill = ({
  children,
  active,
  button,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  button?: boolean;
  onClick?: () => void;
}) => {
  return (
    <span
      onClick={onClick}
      className={`py-0.5 px-1 rounded-md border border-sky-500 shadow-lg 
        ${button && "hover:scale-105 ease-out duration-300 cursor-pointer"}
        ${active && "bg-sky-500 text-[#DDE6ED]"}
        `}
    >
      {children}
    </span>
  );
};
export default Pill;

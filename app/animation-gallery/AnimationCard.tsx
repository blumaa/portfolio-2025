const AnimationCard = ({
  children,
  bgColor = "bg-gray-900",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div
      className={`overflow-hidden border border-sky-500 ${bgColor} 
        rounded-3xl shadow h-48 w-3/4 md:w-1/4 `}
    >
      {children}
    </div>
  );
};
export default AnimationCard;

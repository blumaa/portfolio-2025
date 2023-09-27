const AnimationCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`overflow-hidden border border-sky-500 bg-gray-900 
        rounded-3xl shadow h-48 w-3/4 md:w-1/4 `}
    >
      {children}
    </div>
  );
};
export default AnimationCard;

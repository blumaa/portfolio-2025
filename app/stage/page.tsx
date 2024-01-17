"use client";
import { Header } from "../header/header";
import AnimatedBeaverMoon from "../animation-gallery/animations/AnimatedBeaverMoon";

const Stage = () => {
  return (
    <>
      <Header>Stage</Header>
      <div className="p-4 h-full flex items-center justify-center ">
        <div className="w-36">
          <AnimatedBeaverMoon />
        </div>
      </div>
    </>
  );
};
export default Stage;

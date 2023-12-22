import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import AnimatedMoon from "./animations/AnimatedMoon";
import { AnimatedTitle } from "./animations/AnimatedTitle";

export default function AnimationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <>
          <div className="h-8">
            <AnimatedMoon />
          </div>
          <AnimatedTitle />
        </>
      </Header>
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

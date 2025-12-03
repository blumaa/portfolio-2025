import { Box } from "@mond-design-system/theme";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import AnimatedMoon from "./animations/AnimatedMoon";
import { AnimatedTitle } from "./animations/AnimatedTitle";

export default function AnimationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Box className="h-8">
            <AnimatedMoon />
          </Box>
          <AnimatedTitle />
        </Box>
      </Header>
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}

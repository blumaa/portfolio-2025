import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function WorkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Icon size="md">
            <WrenchScrewdriverIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            work
          </Text>
        </Box>
      </Header>
      {children}
      <Footer />
    </Box>
  );
}

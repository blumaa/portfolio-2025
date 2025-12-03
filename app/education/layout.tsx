import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function EducationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xl" paddingTop="5">
          <Icon size="md">
            <BuildingLibraryIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            education
          </Text>
        </Box>
      </Header>
      <Box display="flex" justifyContent="center" flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

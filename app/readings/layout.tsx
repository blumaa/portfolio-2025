import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function BooksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Icon size="md">
            <DocumentPlusIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            Resources
          </Text>
        </Box>
      </Header>
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}

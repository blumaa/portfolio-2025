import { Box, Icon, Text } from "@mond-design-system/theme";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { TvIcon } from "@heroicons/react/24/solid";

export default function TelevisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Icon size="md">
            <TvIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            television
          </Text>
        </Box>
      </Header>
      {children}
      <Footer />
    </Box>
  );
}

import { UserIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Icon size="md">
            <UserIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            about
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

import { SparklesIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xxs">
          <Icon size="md">
            <SparklesIcon />
          </Icon>
          <Text size="xl" semantic="primary">
            showcase
          </Text>
        </Box>
      </Header>
      {children}
    </Box>
  );
}

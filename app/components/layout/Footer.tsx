import { Box, Text, Link } from "@mond-design-system/theme";

const Footer = () => {
  return (
    <Box
      as="footer"
      paddingTop="2"
      paddingBottom="2"
      width="full"
      display="flex"
      justifyContent="center"
    >
      <Text size="2xs" semantic="secondary">
        © 2025{" "}
        <Link href="mailto:blumaa@gmail.com" size="small">
          Aaron Blum
        </Link>
      </Text>
    </Box>
  );
};

export { Footer };

"use client";

import Image from "next/image";
import { Box, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";

type Social = {
  src: string;
  href: string;
  alt: string;
};
const SocialLink = ({ href, src, alt }: Social) => {
  const { isDarkMode } = useAppTheme();

  return (
    <Box transition="transform 0.3s" cursor="pointer" isDarkMode={isDarkMode}>
      <Link href={href} target="_blank" isDarkMode={isDarkMode} iconOnly>
        <Image src={src} width={20} height={20} alt={alt} />
      </Link>
    </Box>
  );
};

export default SocialLink;

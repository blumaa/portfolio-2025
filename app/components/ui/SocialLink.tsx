"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@mond-design-system/theme";

type Social = {
  src: string;
  href: string;
  alt: string;
};

const SocialLink = ({ href, src, alt }: Social) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        iconOnly
        aria-label={alt}
        size="sm"
      >
        <Image src={src} width={20} height={20} alt={alt} />
      </Button>
    </motion.div>
  );
};

export default SocialLink;

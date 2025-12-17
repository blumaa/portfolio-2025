"use client";

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Card, Box, Link } from "@mond-design-system/theme";

const AnimationCard = ({
  children,
  codeLink,
}: {
  children: React.ReactNode;
  codeLink?: string;
}) => {
  return (
    <Box>
      <Card variant="elevated" hoverable>
        <Box
          display="flex"
          flexDirection="column"
          className="animation-card relative"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            corners="rounded-lg"
            className="overflow-hidden animation-card-preview"
            border="default"
          >
            {children}
          </Box>
          {codeLink && (
            <Box
              padding="1"
              border="default"
              corners="rounded-lg"
              className="absolute animation-card-code-link"
            >
              <Box display="flex" justifyContent="center" className="relative">
                <Link
                  href={codeLink}
                  target="_blank"
                  iconOnly
                  icon={<CodeBracketIcon width={20} height={20} />}
                >
                  <span />
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};
export default AnimationCard;

"use client";

import { Text, Badge, Button } from "@mond-design-system/theme";
import { Project } from "../../globals/projects";

// Puzzle icon SVG
const PuzzleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "6px" }}
  >
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  </svg>
);

interface ProjectSectionHeaderProps {
  project: Project;
}

const ProjectSectionHeader = ({ project }: ProjectSectionHeaderProps) => {
  const {
    name,
    tagline,
    category,
    featured,
    link,
    description,
    liveUrl,
    liveUrlLabel,
    storybookUrl,
    githubUrl,
    npmUrl,
    techStack,
    year,
  } = project;

  const nameElement = (
    <Text as="h2" size="2xl" weight="bold">
      {name}
    </Text>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flex: 1,
        justifyContent: "center",
        height: "100%",
        minWidth: 0,
      }}
    >
      {/* Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {link ? (
          <a
            href={link}
            target={link.startsWith("/") ? "_self" : "_blank"}
            rel={link.startsWith("/") ? undefined : "noopener noreferrer"}
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {nameElement}
          </a>
        ) : (
          nameElement
        )}
        <Badge variant="outline">{category}</Badge>
        {featured && <Badge variant="success">Featured</Badge>}
      </div>

      {/* Tagline */}
      <Text size="lg" semantic="secondary">
        {tagline}
      </Text>

      {/* Tech Stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {/* Year */}
        <Text size="sm" semantic="secondary">
          {year}
        </Text>
        {techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <Text size="md">{description}</Text>
      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {liveUrl && (
          <Button
            as="a"
            href={liveUrl}
            target={liveUrl.startsWith("/") ? "_self" : "_blank"}
            rel={liveUrl.startsWith("/") ? undefined : "noopener noreferrer"}
            variant="primary"
          >
            {liveUrlLabel === "Play" && <PuzzleIcon />}
            {liveUrlLabel || "View"}
          </Button>
        )}
        {storybookUrl && (
          <Button
            as="a"
            href={storybookUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            View Storybook
          </Button>
        )}
        {githubUrl && (
          <Button
            as="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            GitHub
          </Button>
        )}
        {npmUrl && (
          <Button
            as="a"
            href={npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            npm
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectSectionHeader;

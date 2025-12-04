"use client";

import { Text, Badge } from "@mond-design-system/theme";
import { Project } from "../../globals/projects";

interface ProjectSectionFooterProps {
  project: Project;
}

const ProjectSectionFooter = ({ project }: ProjectSectionFooterProps) => {
  const { techStack, year } = project;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Tech Stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Year */}
      <Text size="sm" semantic="secondary">
        {year}
      </Text>
    </div>
  );
};

export default ProjectSectionFooter;

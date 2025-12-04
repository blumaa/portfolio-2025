"use client";

import { forwardRef } from "react";
import { Project } from "../../globals/projects";
import ProjectSectionHeader from "./ProjectSectionHeader";
import ProjectSectionBody from "./ProjectSectionBody";
import "../../../styles/project-section.css";

interface ProjectSectionProps {
  project: Project;
  showDivider?: boolean;
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  ({ project, showDivider = false }, ref) => {
    return (
      <div ref={ref} className="project-section">
        <div className="project-section-container">
          {/* Two-column layout: Content left, Preview right (stacks on mobile) */}
          <div className="project-section-content">
            {/* Left column: Title, type, description */}
            <ProjectSectionHeader project={project} />

            {/* Right column: Preview */}
            <div className="project-section-preview-wrapper">
              <ProjectSectionBody project={project} />
            </div>
          </div>
        </div>

        {/* Divider */}
        {showDivider && <div className="project-section-divider" />}
      </div>
    );
  }
);

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;

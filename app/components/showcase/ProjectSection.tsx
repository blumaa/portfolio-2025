"use client";

import { forwardRef } from "react";
import { Project } from "../../globals/projects";
import ProjectSectionHeader from "./ProjectSectionHeader";
import ProjectSectionBody from "./ProjectSectionBody";
import ProjectSectionFooter from "./ProjectSectionFooter";
import styles from "./ProjectSection.module.css";

interface ProjectSectionProps {
  project: Project;
  showDivider?: boolean;
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  ({ project, showDivider = false }, ref) => {
    return (
      <div ref={ref} className={styles.section}>
        <div className={styles.container}>
          {/* Two-column layout: Content left, Preview right (stacks on mobile) */}
          <div className={styles.content}>
            {/* Left column: Title, type, description */}
            <ProjectSectionHeader project={project} />

            {/* Right column: Preview */}
            <div className={styles.previewWrapper}>
              <ProjectSectionBody project={project} />
            </div>
          </div>

          {/* Bottom: Tech stack, buttons, year */}
          {/* <ProjectSectionFooter project={project} /> */}
        </div>

        {/* Divider */}
        {showDivider && <div className={styles.divider} />}
      </div>
    );
  }
);

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;

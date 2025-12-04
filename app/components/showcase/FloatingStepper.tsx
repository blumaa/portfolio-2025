"use client";

import StepperDot from "./StepperDot";
import { Project } from "../../globals/projects";

interface FloatingStepperProps {
  projects: Project[];
  activeIndex: number;
  progress: number[];
  onDotClick: (index: number) => void;
}

const FloatingStepper = ({
  projects,
  activeIndex,
  progress,
  onDotClick,
}: FloatingStepperProps) => {
  return (
    <div
      className="floating-stepper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        position: "fixed",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        padding: "16px 8px",
        borderRadius: "24px",
        background: "transparent",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(128, 128, 128, 0.15)",
      }}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StepperDot
            isActive={index === activeIndex}
            fillProgress={progress[index] || 0}
            onClick={() => onDotClick(index)}
            label={project.name}
          />
          {index < projects.length - 1 && (
            <div
              style={{
                width: "2px",
                height: "16px",
                background:
                  progress[index] >= 1
                    ? "var(--mond-brand-interactive-background)"
                    : "var(--mond-border-default)",
                transition: "background 0.3s ease",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingStepper;

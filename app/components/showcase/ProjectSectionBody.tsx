"use client";

import { useState, Suspense, lazy } from "react";
import { Text, Spinner, Button } from "@mond-design-system/theme";
import { Project } from "../../globals/projects";
import ProjectPreview from "./ProjectPreview";

// Lazy load animation components
const animationComponents: Record<
  string,
  React.LazyExoticComponent<React.ComponentType>
> = {
  NoirCarChase: lazy(
    () => import("../../animation-gallery/animations/NoirCarChase")
  ),
  RustlingGrass: lazy(
    () => import("../../animation-gallery/animations/RustlingGrass")
  ),
  AnimatedLoadingAirplane: lazy(
    () => import("../../animation-gallery/animations/AnimatedLoadingAirplane")
  ),
  CityScapeWrapper: lazy(
    () => import("../../animation-gallery/animations/CityScape/CityScapeWrapper")
  ),
  OctoDude: lazy(() => import("../../animation-gallery/animations/OctoDude")),
  AnimatedEyeballWatching: lazy(
    () => import("../../animation-gallery/animations/AnimatedEyeballWatching")
  ),
  Bird: lazy(() => import("../../animation-gallery/animations/Bird")),
  Bus: lazy(() => import("../../animation-gallery/animations/Bus")),
  Modcast: lazy(() => import("../../modcast/Modcast")),
  NuclearPhysics1: lazy(() => import("../../animation-gallery/animations/NuclearPhysics1")),
};

interface ProjectSectionBodyProps {
  project: Project;
}

const ProjectSectionBody = ({ project }: ProjectSectionBodyProps) => {
  const { previewType, previewComponents } = project;
  const [activeIndex, setActiveIndex] = useState(0);

  // Multi-GSAP carousel view
  if (previewType === "multi-gsap" && previewComponents?.length) {
    const currentComponent = previewComponents[activeIndex];
    const AnimationComponent = animationComponents[currentComponent];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Preview Area */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "280px",
            background: "var(--mond-surface-subtle)",
            borderRadius: "8px",
            border: "1px solid var(--mond-border-default)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {AnimationComponent ? (
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Spinner size="lg" />
                </div>
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <AnimationComponent />
              </div>
            </Suspense>
          ) : (
            <Text semantic="secondary">Animation not found</Text>
          )}
        </div>

        {/* Carousel Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? previewComponents.length - 1 : prev - 1
              )
            }
            aria-label="Previous animation"
          >
            &larr;
          </Button>

          {/* Dot indicators */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {previewComponents.map((comp, index) => (
              <button
                key={comp}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${comp}`}
                title={comp}
                style={{
                  width: index === activeIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background:
                    index === activeIndex
                      ? "var(--mond-brand-interactive-background)"
                      : "var(--mond-border-default)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === previewComponents.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Next animation"
          >
            &rarr;
          </Button>
        </div>

        {/* Animation name */}
        <Text size="xs" semantic="secondary" align="center">
          {currentComponent}
        </Text>
      </div>
    );
  }

  // Single preview (iframe, image, video, gsap)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        height: "100%",
      }}
    >
      {/* Preview Area */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          background: "var(--mond-surface-subtle)",
          borderRadius: "8px",
          border: "1px solid var(--mond-border-default)",
          overflow: "hidden",
        }}
      >
        <ProjectPreview project={project} />
      </div>
    </div>
  );
};

export default ProjectSectionBody;

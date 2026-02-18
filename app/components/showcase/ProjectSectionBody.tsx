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
  Lighthouse: lazy(() => import("../../animation-gallery/animations/Lighthouse")),
};

interface ProjectSectionBodyProps {
  project: Project;
}

const ProjectSectionBody = ({ project }: ProjectSectionBodyProps) => {
  const { previewType, previewComponents, apps } = project;
  const [activeIndex, setActiveIndex] = useState(0);

  // Multi-iframe carousel view (for app variants like xclues)
  if (previewType === "multi-iframe" && apps?.length) {
    const currentApp = apps[activeIndex];

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
            position: "relative",
            width: "100%",
          }}
        >
          <iframe
            src={currentApp.previewUrl}
            title={`${currentApp.name} preview`}
            style={{
              width: "100%",
              border: "none",
              borderRadius: "8px",
            }}
            loading="lazy"
          />
          <a
            href={currentApp.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--mond-brand-interactive-background)",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            title={`Open ${currentApp.name} in new tab`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
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
                prev === 0 ? apps.length - 1 : prev - 1
              )
            }
            aria-label="Previous app"
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
            {apps.map((app, index) => (
              <button
                key={app.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${app.name}`}
                title={app.name}
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
                prev === apps.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Next app"
          >
            &rarr;
          </Button>
        </div>

        {/* App name and tagline */}
        <div style={{ textAlign: "center" }}>
          <Text size="sm" weight="bold">
            {currentApp.name}
          </Text>
          <Text size="xs" semantic="secondary">
            {currentApp.tagline}
          </Text>
        </div>
      </div>
    );
  }

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

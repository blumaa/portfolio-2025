"use client";

import { Suspense, lazy, useState } from "react";
import Image from "next/image";
import { Text, Spinner } from "@mond-design-system/theme";
import { Project } from "../../globals/projects";

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
  Television: lazy(() => import("../../television/Television")),
};

interface ProjectPreviewProps {
  project: Project;
}

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  const { previewType, previewUrl, previewComponent, thumbnail, images, name } =
    project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image gallery preview (multiple images)
  if (previewType === "image" && images && images.length > 0) {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "280px",
        }}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`${name} preview ${currentImageIndex + 1}`}
          fill
          style={{
            objectFit: "contain",
          }}
        />
        {images.length > 1 && (
          <>
            {/* Navigation arrows */}
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "var(--mond-brand-interactive-background)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              aria-label="Previous image"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "var(--mond-brand-interactive-background)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              aria-label="Next image"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            {/* Dot indicators */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
              }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === currentImageIndex
                        ? "var(--mond-brand-interactive-background)"
                        : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Single image preview
  if (previewType === "image" && thumbnail) {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "280px",
        }}
      >
        <Image
          src={thumbnail}
          alt={`${name} preview`}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  // Image fallback when no thumbnail
  if (previewType === "image") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "300px",
        }}
      >
        <Text semantic="secondary">Preview coming soon</Text>
      </div>
    );
  }

  // Iframe preview
  if ((previewType === "iframe" || previewType === "storybook") && previewUrl) {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <iframe
          src={previewUrl}
          title={`${name} preview`}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          loading="lazy"
        />
        <a
          href={previewUrl}
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
          title={`Open ${name} in new tab`}
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
    );
  }

  // GSAP animation preview
  if (previewType === "gsap" && previewComponent) {
    const AnimationComponent = animationComponents[previewComponent];

    if (AnimationComponent) {
      return (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "300px",
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
              minHeight: "300px",
            }}
          >
            <AnimationComponent />
          </div>
        </Suspense>
      );
    }
  }

  // Video preview
  if (previewType === "video" && previewUrl) {
    return (
      <video
        src={previewUrl}
        controls
        style={{
          maxWidth: "100%",
          maxHeight: "400px",
        }}
      />
    );
  }

  // Fallback
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "300px",
      }}
    >
      <Text semantic="secondary">Preview not available</Text>
    </div>
  );
};

export default ProjectPreview;

"use client";

interface StepperDotProps {
  isActive: boolean;
  fillProgress: number; // 0 to 1
  onClick: () => void;
  label?: string;
}

const StepperDot = ({
  isActive,
  fillProgress,
  onClick,
  label,
}: StepperDotProps) => {
  return (
    <button
      onClick={onClick}
      className="stepper-dot"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isActive ? "16px" : "12px",
        height: isActive ? "16px" : "12px",
        borderRadius: "50%",
        border: "2px solid var(--mond-brand-interactive-background)",
        background: `conic-gradient(
          var(--mond-brand-interactive-background) ${fillProgress * 360}deg,
          transparent ${fillProgress * 360}deg
        )`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: isActive ? "scale(1.2)" : "scale(1)",
        boxShadow: isActive
          ? "0 0 8px var(--mond-brand-interactive-background)"
          : "none",
        padding: 0,
      }}
      aria-label={label}
      title={label}
    />
  );
};

export default StepperDot;

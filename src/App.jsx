// InlineSpinner.jsx
import React from "react";

export default function Spinner({ size = 28, thickness = 3 }) {
  // center and radius calculation
  const cx = size / 2;
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  const dash = circumference * 0.25; // visible arc length
  const gap = circumference; // remaining gap

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "inline-block", verticalAlign: "middle" }} // inline use
      aria-hidden="true"
    >
      {/* faint circle background */}
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke="#ff7a00"
        strokeWidth={thickness}
        strokeOpacity="0.15"
      />
      {/* rotating arc */}
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke="#ff7a00"
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${gap}`}
        transform={`rotate(0 ${cx} ${cx})`}
      >
        {/* SVG animation (no external CSS needed) */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cx}`}
          to={`360 ${cx} ${cx}`}
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

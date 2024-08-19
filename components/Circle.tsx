import React from "react";

const Circle = ({ progress }: { progress: number }) => {
  // Calculate the stroke-dashoffset based on the progress
  const circumference = 450; // This should match the stroke-dasharray value
  const offset = circumference - progress * circumference;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="160px"
      height="160px"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#DA22FF" />
          <stop offset="100%" stopColor="#9733EE" />
        </linearGradient>
      </defs>
      <circle
        cx="80"
        cy="80"
        r="70"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 80 80)" // Rotate the circle by 90 degrees
      />
    </svg>
  );
};

export default Circle;

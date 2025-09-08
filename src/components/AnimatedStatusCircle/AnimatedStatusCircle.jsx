// AnimatedStatusCircle.jsx
import React from "react";

const AnimatedStatusCircle = ({ size = 26, color = "#4CAF50", duration = 1500 }) => {
  return (
    <div
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Pulsing circle */}
      <span
        className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-50 animate-ping"
        style={{ animationDuration: `${duration}ms` }}
      ></span>
      {/* Main circle */}
      <span
        className="relative inline-flex w-full h-full rounded-full"
        style={{ backgroundColor: color }}
      ></span>
    </div>
  );
};

export default AnimatedStatusCircle;

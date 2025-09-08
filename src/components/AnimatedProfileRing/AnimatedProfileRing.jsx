import React from "react";

const AnimatedProfileRing = ({ src, alt }) => {
  return (
    <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
      {/* Animated dotted glowing rainbow ring */}
      <div className="absolute inset-0 rounded-full animate-rotate">
        <div className="absolute inset-0 rounded-full border-[6px] border-dotted rainbow-dots"></div>
      </div>

      {/* Profile Image */}
      <img
        className="w-28 md:w-36 rounded-full border-4 border-gray-800 p-1 transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
        src={src}
        alt={alt}
      />

      {/* Custom Animations */}
      <style>{`
        /* Smooth rainbow gradient for dots */
        .rainbow-dots {
          border-image: conic-gradient(
            red, orange, yellow, green, cyan, blue, violet, red
          ) 1;
          animation: rainbowShift 6s linear infinite;
        }

        /* Rotate the dotted ring smoothly */
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(30deg); }
        }
        .animate-rotate {
          animation: rotate 10s linear infinite alternate;
        }

        /* Smooth color cycling */
        @keyframes rainbowShift {
          0%   { filter: hue-rotate(0deg);   box-shadow: 0 0 10px red; }
          50%  { filter: hue-rotate(180deg); box-shadow: 0 0 15px cyan; }
          100% { filter: hue-rotate(360deg); box-shadow: 0 0 10px red; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedProfileRing;

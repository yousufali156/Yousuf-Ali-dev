import React, { useEffect, useState } from "react";

const Loader = ({ message = "Loading..." }) => {
  const [progress, setProgress] = useState(0);

  // Fake progress animation (demo purpose)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
      {/* Glowing Spinner Circle */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-24 h-24 border-4 border-t-transparent border-b-transparent border-green-400 rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse blur-lg opacity-75"></div>
      </div>

      {/* Loading Message */}
      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 mb-6 animate-pulse">
        {message}
      </span>

      {/* Fancy Progress Bar */}
      <div className="w-72 h-4 bg-white/20 rounded-full overflow-hidden shadow-xl">
        <div
          className="h-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 relative transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>

      {/* Percentage */}
      <span className="mt-4 text-white/90 text-sm tracking-wide font-medium drop-shadow">
        {progress}%
      </span>

      {/* Extra CSS */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;

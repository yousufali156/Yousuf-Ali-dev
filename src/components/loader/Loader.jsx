import React from 'react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
      
      {/* Spinner Circles */}
      <div className="flex space-x-2 mb-4">
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>

      {/* Message */}
      <span className="text-white text-lg font-medium">{message}</span>

      {/* Optional Animated SVG (classic) */}
      <svg
        width="50px"
        height="50px"
        className="mt-4 animate-spin"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="20" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .animate-bounce {
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Loader;

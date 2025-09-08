import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Clock updater
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const updateClock = () => setTime(formatter.format(new Date()));
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll visibility
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          {/* Logo + Name */}
          <div className="flex flex-col items-center gap-4 mb-6">
            {/* Logo */}
            <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500 via-blue-600 to-pink-500 shadow-lg">
              <img
                src="/yousuf-logo.png"
                alt="Yousuf Logo"
                className="h-16 w-16 rounded-full border-2 border-black object-cover"
              />
            </div>

            {/* Name */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                MD. YOUSUF ALI
              </h2>
              <p className="text-sm md:text-base mt-1 text-gray-400">MERN Stack Front-end Developer</p>
            </div>
          </div>

          {/* Clock */}
          <div className="inline-flex items-center gap-3 text-green-400 font-mono text-base px-6 py-3 rounded-lg border border-green-400/40 shadow-[0_0_15px_#00ffcc,0_0_40px_#00ffcc] backdrop-blur-md animate-pulse mb-6">
            <span className="font-semibold">Current Time:</span>
            <span className="font-bold">{time}</span>
          </div>

          {/* Footer Text */}
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Md. Yousuf Ali - MERN Developer from Bogura, Bangladesh
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
          rounded-full bg-gray-900 p-3 shadow-lg transition-all duration-300 
          hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </>
  );
};

export default Footer;

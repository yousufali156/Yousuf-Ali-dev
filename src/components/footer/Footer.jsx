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

  // Scroll visibility detector
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      href: "https://github.com/Yousuf-Ali-dev",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/yousuf-ali-dev/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "mailto:mdyousufali.dev@gmail.com",
      icon: "fas fa-envelope",
      label: "Email",
    },
  ];

  return (
    <>
      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
        {/* Pattern Layer */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#94a3b8_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Logo + Name & Title Section (Responsive) */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-8 group">
            {/* Logo with gradient glow + hover rotate */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-blue-600 to-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <img
                src="/yousuf-logo.png"
                alt="Yousuf Logo"
                className="h-20 w-20 rounded-full object-contain border-2 border-black 
                transition-all duration-500 ease-in-out 
                group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] logo-hover-rotate animate-spin-slow"

                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://i.ibb.co/wFRM3C9W/Yousuf-Ali-Web-Developer.png";
                }}
              />
            </div>

            {/* Name & Title */}
            <div className="text-center md:text-left">
              {/* Main Name */}
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent 
                  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 
                  relative bg-[length:200%_auto] animate-[gradient-pan_6s_linear_infinite]"
              >
                MD. YOUSUF ALI
                {/* Underline Animation */}
                <span
                  className="absolute bottom-[-6px] left-0 w-full h-[3px] rounded-full
                  bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500
                  transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-500 ease-out origin-center"
                ></span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl mt-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                MERN Stack Front-end Developer
              </p>
            </div>

            {/* Animations */}
            <style>{`
                      @keyframes gradient-pan {
                        0% { background-position: 0% center; }
                        100% { background-position: 200% center; }
                      }

                      @keyframes bounce-rotate {
                        0% { transform: rotate(0deg) scale(1); }
                        80% { transform: rotate(350deg) scale(1.1); }
                        100% { transform: rotate(360deg) scale(1); }
                      }

                      .group:hover .logo-hover-rotate {
                        animation: bounce-rotate 0.8s ease-in-out;
                      }
                    `}
            </style>

          </div>


          {/* Social Buttons (Responsive Spacing) */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-10">
            {socials.map(({ href, icon, label }) => (
              <button
                key={label}
                onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
                aria-label={label}
                className="w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md 
                 border border-white/20 text-2xl shadow-lg 
                 hover:scale-125 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all duration-500"
              >
                <i className={icon}></i>
              </button>
            ))}
          </div>

          {/* Clock Section (Responsive) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg sm:text-xl font-semibold mb-10">
            <span>Current Time:</span>
            <span
              id="footer-clock"
              className="px-4 py-2 rounded-lg font-mono text-green-400 backdrop-blur-lg border border-green-400/40 
               shadow-[0_0_15px_#00ffcc,0_0_40px_#00ffcc] animate-pulse"
            >
              {time}
            </span>
          </div>

          {/* Footer Text (Responsive) */}
          <div className="border-t border-white/20 pt-6 text-sm sm:text-base">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-purple-400">
                Md. Yousuf Ali
              </span>{" "}
              - Full Stack MERN Developer from{" "}
              <span className="text-green-400">Bogura, Bangladesh</span>
            </p>
            <p className="mt-2">
              Crafting scalable web applications that solve real-world
              challenges 🚀
            </p>
          </div>
        </div>


      </footer>

      {/* Scroll to top button (Cleaned up) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
          rounded-full backdrop-blur-md border border-white/30
          p-3 shadow-lg transition-all duration-300 
          hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,200,0.8)] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <ArrowUp className="w-6 h-6 font-bold" />
      </button>

      {/* Custom Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Footer;
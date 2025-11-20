import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import AnimatedProfileRing from "../AnimatedProfileRing/AnimatedProfileRing";

const Header = () => {
  return (
    <header
      className="relative text-white flex flex-col items-center justify-center overflow-hidden py-20 px-4"
      style={{
        background:
          "radial-gradient(circle at center, #0f0f0f 0%, #090909 40%, #000 100%)",
      }}
    >
      {/* Background glow elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-pink-600/10 rounded-full blur-2xl"></div>

      {/* Profile + Info */}
      <Fade>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-10 text-center md:text-left">

          {/* Profile Image with glowing animated dotted ring */}
          <AnimatedProfileRing
            src="https://i.ibb.co/wFRM3C9W/Yousuf-Ali-Web-Developer.png"
            alt="yousufalidev"
          />

          {/* Info */}
          <div className="flex flex-col justify-center gap-2 max-w-6xl mx-auto">
            <h1 className="text-3xl  md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-gradient-pan">
              <Typewriter
                words={[
                  "Md. Yousuf Ali",
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Hard Worker",
                  "Passionate Developer",
                  "Continuous Learner",
                  "Learning Next.js",
                  "&",
                  "TypeScript",
                  "&",
                  "Laravel",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h1>
            <p className="text-md md:text-lg font-semibold text-white/80">
              MERN Stack Frontend Developer
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-2xl justify-center md:justify-start">
              <a href="https://yousufali-portfolio.vercel.app/" target="_blank" title="Portfolio Website">
                <TbWorldCode className="hover:text-pink-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/yousufalidev" target="_blank" title="LinkedIn">
                <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://github.com/yousufali156" target="_blank" title="GitHub">
                <FaGithubSquare className="hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="https://www.facebook.com/yousufalidev" target="_blank" title="Facebook">
                <FaFacebookSquare className="hover:text-blue-700 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </Fade>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45 mb-1"></span>
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45"></span>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 mt-10 w-3/4 mx-auto" />

      {/* Gradient animation for text */}
      <style>{`
        @keyframes gradient-pan {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient-pan {
          background-size: 200% auto;
          animation: gradient-pan 5s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;

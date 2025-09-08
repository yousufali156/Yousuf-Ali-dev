// Header.jsx
import React from "react";
import AnimatedStatusCircle from "../AnimatedStatusCircle/AnimatedStatusCircle";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header className="relative bg-black mx-auto content-center text-center text-white flex items-center justify-center overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-600/20 rounded-full animate-spin-slow"></div>

      <div className="container mx-auto px-4 py-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
          {/* Profile Image + Status */}
          <div className="relative">
            <img
              className="mx-auto md:mx-0 w-36 md:w-40 rounded-full border-4 border-dotted border-gray-600 p-2 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:grayscale-0"
              src="https://i.ibb.co/wFRM3C9W/Yousuf-Ali-Web-Developer.png"
              alt="Yousuf Ali"
            />
            <AnimatedStatusCircle size={26} color="#4CAF50" duration={1500} />
          </div>

          {/* Name + Title + Typewriter */}
          <Fade>
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 animate-gradient-pan">
                <Typewriter
                  words={["Yousuf Ali", "Front-end Developer", "MERN Stack"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white/80 mt-2">
                MERN Stack Front-end Developer
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
                <a href="https://shihab-dev.web.app" target="_blank" title="Portfolio Website">
                  <TbWorldCode className="hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/yousufali156" target="_blank" title="LinkedIn">
                  <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
                </a>
                <a href="https://github.com/yousufali156" target="_blank" title="GitHub">
                  <FaGithubSquare className="hover:text-gray-300 transition-colors duration-300" />
                </a>
                <a href="https://www.facebook.com/yousufali156" target="_blank" title="Facebook">
                  <FaFacebookSquare className="hover:text-blue-700 transition-colors duration-300" />
                </a>
              </div>

              {/* Short Bio */}
              <p className="mt-4 md:text-lg text-white/80">
                I explore programming languages and love learning new things. I enjoy building modern and responsive web apps.
              </p>

              {/* CTA Button */}
              <a
                href="#projects"
                className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-105 transition-all duration-300 font-semibold text-white shadow-lg"
              >
                View Projects
              </a>
            </div>
          </Fade>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="block w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45 mb-1"></span>
          <span className="block w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45"></span>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-white/20 mt-10" />
      </div>

      {/* Custom animation for gradient pan */}
      <style>{`
        @keyframes gradient-pan {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient-pan {
          background-size: 200% auto;
          animation: gradient-pan 5s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;

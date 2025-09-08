import React, { use, useState, useEffect, } from "react";
import Repository from "../repository/Repository";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

const Repositories = ({ repositoriesPromise }) => {
  const repositoriesData = use(repositoriesPromise) || [];
  const itemsPerPage = 10; // 2x4 grid
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);

  const totalPages = Math.ceil(repositoriesData.length / itemsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentRepos(repositoriesData.slice(start, end));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, repositoriesData]);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute -top-16 -left-20 w-72 h-72 bg-purple-700/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-16 -right-20 w-72 h-72 bg-pink-600/20 rounded-full animate-spin-slow"></div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 max-w-5xl mx-auto">
        <Typewriter
          words={["Total Repositories", "My Projects", "Latest Work"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={80}
          delaySpeed={2000}
        />{" "}
        <span className="text-pink-500">
          <CountUp start={0} end={repositoriesData.length} enableScrollSpy duration={3} />
          +
        </span>
      </h2>

      {/* Projects Grid 2 columns */}
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center">
        {currentRepos.map((repository, i) =>
          repository ? <Repository key={i} repository={repository} /> : null
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:scale-105 shadow-lg"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${
                currentPage === page
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-lg scale-110"
                  : "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white"
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:scale-105 shadow-lg"
          }`}
        >
          Next
        </button>
      </div>

      {/* Spin animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Repositories;

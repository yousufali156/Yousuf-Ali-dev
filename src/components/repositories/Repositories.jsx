import React, { use, useEffect, useState } from "react";
import Repository from "../repository/Repository";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

const Repositories = ({ repositoriesPromise }) => {
  const repositoriesData = use(repositoriesPromise);
  const [repositories, setRepositories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) setRepositories(repositoriesData);
    else setRepositories(repositoriesData.slice(0, 16));
  }, [showAll, repositoriesData]);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Subtle floating shapes */}
      <div className="absolute -top-16 -left-20 w-72 h-72 bg-purple-700/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-16 -right-20 w-72 h-72 bg-pink-600/20 rounded-full animate-spin-slow"></div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
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
          <CountUp
            start={0}
            end={repositoriesData.length}
            enableScrollSpy
            duration={3}
          />
          +
        </span>
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repository, i) => (
          <Repository key={i} repository={repository} />
        ))}
      </div>

      {/* Show All / Show Less */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            setShowAll(!showAll);
            showAll && window.scrollTo(0, 0);
          }}
          className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg hover:scale-105 transform transition duration-300 text-white"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      {/* Gradient spin animation */}
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

import React from "react";
import { Fade } from "react-awesome-reveal";

const Repository = ({ repository }) => {
  const { name, description, language, repo, live } = repository;
  const myDescription =
    "This project's description is unavailable at this moment....";

  const languageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case "javascript":
        return "bg-yellow-400 text-black";
      case "react":
        return "bg-blue-500 text-white";
      case "nodejs":
        return "bg-green-500 text-white";
      case "html":
        return "bg-red-500 text-white";
      case "css":
        return "bg-blue-300 text-black";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <Fade cascade triggerOnce>
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 flex flex-col justify-between hover:scale-105 transform transition duration-300 cursor-pointer border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:shadow-pink-500/40">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p
            className="text-gray-300 truncate"
            title={description || myDescription}
          >
            {description ? description.slice(0, 120) : myDescription}...
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${languageColor(
              language
            )}`}
          >
            {language || "Unknown"}
          </span>

          <div className="flex gap-3">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-white text-black rounded-md font-semibold shadow hover:bg-gray-800 hover:text-white transition duration-300"
            >
              {repo ? "Code" : "Private"}
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-transparent text-white rounded-md font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-300"
            >
              {live ? "Live" : "No Live"}
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Repository;

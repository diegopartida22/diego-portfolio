import React from "react";
import { useState } from "react";

const frameworks = ["React.js", "Next.js", "TailwindCSS", "Bootstrap"];
const languages = [
  "JavaScript",
  "C++",
  "Python",
  "MatLab",
  "HTML",
  "CSS",
  "SQL",
];
const technologies = [
  "Node.js",
  "Git",
  "GitHub",
  "Vercel",
  "Hostinger",
  "Firebase",
];

function Habilities() {
  const [currentCategory, setCurrentCategory] = useState("frameworks");

  const categories = {
    frameworks,
    languages,
    technologies,
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="mt-12" id="habilities">
      <hr className="border-2 border-gray-200 w-1/4 mx-auto" />
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        Habilities
      </h1>

      <div className="mt-8 flex justify-center">
        <div className="w-2/3">
          <div className="flex justify-center mb-4">
            <button
              className={`px-2 py-2 sm:px-4 sm:py-4 mr-2 rounded-lg  ${
                currentCategory === "frameworks"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("frameworks")}
            >
              Frameworks
            </button>

            <button
              className={`px-2 py-2 sm:px-4 sm:py-4 mr-2 rounded-lg ${
                currentCategory === "languages"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("languages")}
            >
              Languages
            </button>
            <button
              className={`px-2 py-2 sm:px-4 sm:py-4 rounded-lg ${
                currentCategory === "technologies"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("technologies")}
            >
              Technologies
            </button>
          </div>

          <div className="flex justify-center">
            <div className="sm:w-full">
              <ul className="flex justify-center flex-wrap">
                {categories[currentCategory].map((item) => (
                  <li
                    key={item}
                    className="bg-gray-200 sm:p-4 sm:m-2 rounded shadow p-2 m-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilities;

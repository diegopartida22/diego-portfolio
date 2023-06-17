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
    <div className="mt-12">
      <hr className="border-2 border-gray-200 w-1/4 mx-auto" />
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        Habilities
      </h1>

      <div className="mt-8 flex justify-center">
        <div className="w-2/3">
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-4 mr-2 rounded-lg  ${
                currentCategory === "frameworks"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("frameworks")}
            >
              Frameworks
            </button>

            <button
              className={`px-4 py-4 mr-2 rounded-lg ${
                currentCategory === "languages"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("languages")}
            >
              Languages
            </button>
            <button
              className={`px-4 py-4 rounded-lg ${
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
            <div className="w-1/2">
              <ul className="flex justify-center">
                {categories[currentCategory].map((item) => (
                  <li key={item} className="bg-gray-200 p-4 m-2 rounded shadow">
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

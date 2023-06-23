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
  "RStudio",
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
              className={`px-1.5 py-3 sm:px-4 sm:py-4 mr-4 rounded-md hover:transform hover:scale-110 transition duration-500 ease-in-out  ${
                currentCategory === "frameworks"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("frameworks")}
            >
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-6 h-6 hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Frameworks
              </div>
            </button>

            <button
              className={`px-1.5 py-3 sm:px-4 sm:py-4 mr-4 rounded-md hover:transform hover:scale-110 transition duration-500 ease-in-out ${
                currentCategory === "languages"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("languages")}
            >
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-6 h-6 hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                Languages
              </div>
            </button>
            <button
              className={`px-1.5 py-3 sm:px-4 sm:py-4 rounded-md hover:transform hover:scale-110 transition duration-500 ease-in-out ${
                currentCategory === "technologies"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("technologies")}
            >
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-6 h-6 hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                Technologies
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <div className="sm:w-3/4">
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

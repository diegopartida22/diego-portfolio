import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="font-bold text-lg flex justify-end">
      <button
        className="text-gray-300 bg-gray-800 hover:bg-gray-600 rounded-md p-4 transition duration-500 ease-in-out"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-8 hover:rotate-180 transition duration-500 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {showMenu && (
        <div className="absolute mt-24 mr-4 bg-gray-300 p-4 w-1/6 rounded-md shadow-lg animate-fade-in-down">
          <ul className="flex flex-col gap-6 ml-8">
            <li className="flex justify-end">
              <button
                className="text-gray-900 hover:text-indigo-400"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 hover:rotate-180 transition duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-900 hover:font-bold hover:text-gray-800"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-900 hover:font-bold hover:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-gray-900 hover:font-bold hover:text-gray-400"
              >
                Projects
              </a>
            </li>
            <li className="mb-10">
              <a
                href="/contact"
                className="text-gray-900 hover:font-bold hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;

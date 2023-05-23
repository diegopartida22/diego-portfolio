import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="font-bold text-lg">
      <button
        className="text-gray-800 hover:text-gray-400 flex p-4 justify-end bg-black"
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>

      {showMenu && (
        <div className="absolute top-0 right-0 mt-16 mr-4 bg-gray-300 p-5 w-1/6 rounded-md">
          <ul className="flex flex-col gap-6 ml-8">
            <li className="flex justify-end">
              <button
                className="text-gray-900 hover:text-gray-400"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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

import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [showMenuToggle, setShowMenuToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setShowMenuToggle(true);
      } else {
        setShowMenuToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="font-bold text-lg flex justify-center p-6 mb-6 shadow-md fixed top-0 w-full bg-white z-10">
        <ul className="flex flex-row gap-6">
          <li>
            <a
              href="/"
              className="text-gray-900 hover:font-bold hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-900 hover:font-bold hover:text-orange-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-gray-900 hover:font-bold hover:text-orange-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-900 hover:font-bold hover:text-orange-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {showMenuToggle && (
        <div className="font-bold text-lg flex justify-end p-6 mb-6 fixed top-0 right-0 z-20">
          <button
            className="text-gray-300 bg-gray-800 hover:bg-gray-600 rounded-md p-4 m-4 transition duration-500 ease-in-out"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute top-32 right-10 bg-gray-300 p-6 w-60 rounded-md shadow-lg animate-slide-down">
              <ul className="flex flex-col gap-6 ml-6">
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
                    className="text-gray-900 hover:font-bold hover:text-orange-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-900 hover:font-bold hover:text-orange-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-900 hover:font-bold hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-900 hover:font-bold hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>

                <li className="mb-10">
                  <a
                    href="./assets/DiegoPartida_Resume.pdf"
                    download="DiegoPartida_Resume.pdf"
                    className="text-gray-900 hover:font-bold hover:text-orange-500 flex flex-row gap-2"
                  >
                    CV
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;

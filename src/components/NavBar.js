import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenuToggle, setShowMenuToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setShowNavbar(false);
        setShowMenuToggle(true);
      } else {
        setShowNavbar(true);
        setShowMenuToggle(false);
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="navbar">
      <div
        className={`font-bold text-s sm:text-2xl flex justify-center p-6 mb-6 shadow-md fixed top-0 w-full bg-white z-10  transition-all duration-500 ${
          showNavbar ? "opacity-100 animate-slide-up" : "opacity-0"
        }`}
      >
        <ul className="flex flex-row gap-6 group">
          <li>
            <Link
              className="text-gray-700 font-bold hover:text-orange-500 cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-bold hover:text-orange-500 cursor-pointer"
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-180}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-bold hover:text-orange-500 cursor-pointer"
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-10}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-bold hover:text-orange-500 cursor-pointer"
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact
            </Link>
          </li>
          <li>
            <RouterLink
              className="text-yellow-700 font-bold hover:text-orange-500 cursor-pointer"
              to="/blog"
            >
              Blog
            </RouterLink>
          </li>
        </ul>
      </div>
      <div
        className={`font-bold text-lg sm:p-6 mb-6 fixed top-0 right-0 z-20 transition-all duration-200 ${
          showMenuToggle
            ? "animate-slide-left opacity-100 "
            : "animate-slide-right opacity-0"
        }`}
      >
        <button
          className="text-gray-300 bg-gray-800 hover:bg-gray-600 rounded-md p-2 sm:p-4 m-4 transition duration-200 ease-in-out"
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
        <div
          className={`fixed text-xl sm:text-2xl top-20 sm:top-32 right-4 sm:right-10 bg-gray-300 p-2 sm:p-6 w-11/12 sm:w-80 rounded-md shadow-lg transition-all duration-200 ${
            showMenu
              ? "animate-slide-left opacity-100"
              : "animate-slide-right translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 sm:ml-6">
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
            <li className="flex justify-center sm:justify-start">
              <Link
                className="text-gray-900 hover:font-bold hover:text-orange-500 cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={handleMenuToggle}
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center sm:justify-start">
              <Link
                className="text-gray-900 hover:font-bold hover:text-orange-500 cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={handleMenuToggle}
              >
                About
              </Link>
            </li>
            <li className="flex justify-center sm:justify-start">
              <Link
                className="text-gray-900 hover:font-bold hover:text-orange-500 cursor-pointer"
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-10}
                onClick={handleMenuToggle}
              >
                Projects
              </Link>
            </li>
            <li className="flex justify-center sm:justify-start">
              <Link
                className="text-gray-900 hover:font-bold hover:text-orange-500 cursor-pointer"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={handleMenuToggle}
              >
                Contact
              </Link>
            </li>

            <li className="flex justify-center sm:justify-start mb-10">
              <a
                href="./assets/DiegoResume.pdf"
                download="DiegoPartida_Resume.pdf"
                className="text-gray-900 hover:font-bold hover:text-orange-500 cursor-pointer flex flex-row gap-2"
                onClick={handleMenuToggle}
              >
                Resume
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
      </div>
    </div>
  );
}

export default NavBar;

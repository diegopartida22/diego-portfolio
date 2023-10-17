import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./NavBar.css";

function NavBarBlog() {
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

  return (
    <div id="navbar">
      <div
        className={`font-bold text-s sm:text-2xl flex justify-center p-6 mb-6 shadow-md fixed top-0 w-full bg-white z-10  transition-all duration-500 ${
          showNavbar ? "opacity-100 animate-slide-up" : "opacity-0"
        }`}
      >
        <ul className="flex flex-row gap-6 group">
          <li>
            <RouterLink
              className="text-gray-700 font-bold hover:text-orange-500 cursor-pointer flex flex-row gap-2 items-center"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
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
        <RouterLink to="/">
          <button
            className="text-gray-300 bg-gray-800 hover:bg-gray-600 rounded-md p-2 sm:p-4 m-4 transition duration-200 ease-in-out"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </RouterLink>
      </div>
    </div>
  );
}

export default NavBarBlog;

import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 mt-8 w-full">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <p className="text-white">
          Built With{" "}
          <span role="img" aria-label="heart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 inline-block align-text-bottom"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </span>{" "}
          by Diego Partida
        </p>
        <div className="flex flex-row gap-2 ml-2 text-white animate-bounce hover:text-blue-500 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

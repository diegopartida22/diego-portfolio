import React from "react";

function Home() {
  return (
    <div className="mt-32 flex justify-center flex-col" id="home">
      <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 text-center">
        Hi! I'm Diego Partida
      </h1>
      <div className="text-xl sm:text-3xl text-gray-600">
        <p className="mt-8 mx-4 sm:mx-auto text-center">
          I'm a{" "}
          <span className="font-bold text-blue-500">
            full-stack web developer
          </span>
        </p>

        <p className="mx-4 sm:mx-auto text-center">
          and a student at Tecnológico de Monterrey.
        </p>
      </div>

      <img
        src="/images/pixelme.png"
        className="w-64 sm:w-96 mx-auto mt-8 rounded-xl border-4 border-gray-200"
        alt="Me pixelated"
      />

      <div className="flex justify-center mt-8 text-xl sm:text-3xl text-gray-600">
        <a
          href="./assets/DiegoPartida_Resume.pdf"
          download="DiegoPartida_Resume.pdf"
          className="hover:font-bold hover:text-orange-500 flex flex-row gap-2"
        >
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-w-w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;

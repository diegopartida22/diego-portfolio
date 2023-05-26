import React from "react";

function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-gray-800 flex justify-center">
        Hi! I'm Diego Partida
      </h1>

      <p className="text-2xl text-gray-600 flex justify-center mt-8">
        I'm a full-stack web developer and a student at Tecnológico de
        Monterrey.
      </p>

      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/diego-partida-1b1a1a1b1/"
          className="text-gray-300 bg-gray-800 hover:bg-gray-600 rounded-md p-4 m-4 transition duration-500 ease-in-out"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;

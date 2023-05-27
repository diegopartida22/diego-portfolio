import React from "react";

function Home() {
  return (
    <div className="mt-32 flex justify-center flex-col">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 text-center">
        Hi! I'm Diego Partida
      </h1>
      <div className="text-2xl sm:text-3xl text-gray-600">
        <p className="mt-8 mx-4 sm:mx-auto text-center">
          I'm a{" "}
          <span className="font-bold text-blue-500">
            full-stack web developer
          </span>
        </p>

        <p className="mt-2 mx-4 sm:mx-auto text-center">
          and a student at Tecnológico de Monterrey.
        </p>
      </div>

      <img
        src="/images/Epañeman.PNG"
        className="w-64 sm:w-96 mx-auto mt-8 rounded-xl border-4 border-gray-200"
        alt="Epañeman"
      />
    </div>
  );
}

export default Home;

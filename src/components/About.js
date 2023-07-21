import React from "react";

function About() {
  return (
    <div className="mt-12" id="about">
      <hr className="border-2 border-gray-200 w-1/4 mx-auto" />

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        About Me
      </h1>
      <div className="max-w-3xl mx-auto p-8 text-xl text-gray-600">
        <p className="mx-auto text-center">
          Hi, I'm Diego Partida, a passionate full-stack web developer. I have a
          strong interest in creating user-friendly web applications.
        </p>

        <p className="mt-4 mx-auto text-center">
          In my free time, I enjoy playing{" "}
          <span className="text-blue-500 font-bold">volleyball</span> and
          solving <span className="text-blue-500 font-bold">Rubik's cube</span>.
          I'm also a <span className="text-blue-500 font-bold">cinephile</span>{" "}
          and appreciate the art of storytelling through movies. Additionally, I
          express my creativity through{" "}
          <span className="text-blue-500 font-bold">pixel art</span>.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <img
          src="/images/Volley.webp"
          className="w-24 sm:w-36"
          alt="Rubik-Cube"
        />
        <img
          src="/images/Rubik.webp"
          className="w-24 sm:w-36"
          alt="Rubik-Cube"
        />
        <img
          src="/images/Spiderman.webp"
          className="w-24 sm:w-36"
          alt="Rubik-Cube"
        />
      </div>
    </div>
  );
}

export default About;

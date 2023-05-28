import React from "react";

function About() {
  return (
    <div className="mt-12">
      <hr className="border-2 border-gray-200 w-1/2 mx-auto" />

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        About Me
      </h1>
      <div className="max-w-3xl mx-auto p-8 text-xl text-gray-600">
        <p className="mx-auto text-center">
          Hi, I'm Diego Partida, a passionate full-stack web developer. I have a
          strong interest in creating user-friendly web applications.
        </p>

        <p className="mt-4 mx-auto text-center">
          In my free time, I enjoy playing volleyball and solving Rubik's cubes.
          I'm also a cinephile and appreciate the art of storytelling through
          movies. Additionally, I express my creativity through pixel art.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <img src="/images/Epañeman.PNG" className="w-36" alt="Rubik-Cube" />
        <img src="/images/Epañeman.PNG" className="w-36" alt="Rubik-Cube" />
        <img src="/images/Epañeman.PNG" className="w-36" alt="Rubik-Cube" />
      </div>
    </div>
  );
}

export default About;

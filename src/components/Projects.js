import React from "react";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero tincidunt, convallis purus ac, tristique est.",
      imageUrl: "/images/Epañeman.PNG",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero tincidunt, convallis purus ac, tristique est.",
      imageUrl: "/images/Epañeman.PNG",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero tincidunt, convallis purus ac, tristique est.",
      imageUrl: "/images/Epañeman.PNG",
    },
  ];

  return (
    <div className="mt-12">
      <hr className="border-2 border-gray-200 w-1/2 mx-auto" />

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover object-center rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

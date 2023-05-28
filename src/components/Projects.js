import React from "react";

function Projects() {
  const projects = [
    {
      title: "ApeironAI",
      description:
        "Developed a range of tools for creative and practical applications such as coding, marketing, art, and typography.",
      imageUrl: "/images/ApeironAI.PNG",
    },
    {
      title: "Numerologist Portfolio",
      description:
        "Technical skills in React.js and Bootstrap, with a deep understanding of front-end development best practices.",
      imageUrl: "/images/NumerologistPortfolio.PNG",
    },
    {
      title: "Diagnosis of malaria through a red blood cell",
      description:
        "Developed a MatLab App for malaria diagnosis using non-uniform electric fields to analyze red blood cells.",
      imageUrl: "/images/MalariaDiagnosis.PNG",
    },
    {
      title: "Phylogenetic tree of SARS-COV-2 variants in different countries",
      description:
        "Created a phylogenetic tree of SARS-COV-2 variants in different countries using RStudio program and NCBI database.",
      imageUrl: "/images/SARS-COV-2PhylogeneticTree.PNG",
    },
    {
      title: "Scheduling Web-App",
      description:
        "Developed an automated scheduling system that makes it easier to manage your daily tasks.",
      imageUrl: "/images/SchedulingWebApp.PNG",
    },
    {
      title: "My Portfolio",
      description:
        "This is my portfolio, where I show my projects and my skills.",
      imageUrl: "/images/MyPortfoliox.PNG",
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

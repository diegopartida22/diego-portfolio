import React from "react";

function Projects() {
  const projects = [
    {
      title: "ApeironAI",
      description:
        "Developed a range of tools for creative and practical applications such as coding, marketing, art, and typography.",
      imageUrl: "/images/ApeironAI.png",
      link: "https://www.apeiron-ai.com/",
    },
    {
      title: "Numerologist Portfolio",
      description:
        "A portfolio for a numerologist, where she can show her services and her clients can book appointments. This was my first freelance project. I developed the front-end with React.js and Bootstrap.",
      imageUrl: "/images/Numerologist.png",
      link: "https://marychelyromero.com/",
    },
    // {
    //   title: "Diagnosis of malaria through a red blood cell",
    //   description:
    //     "Developed a MatLab App for malaria diagnosis using non-uniform electric fields to analyze red blood cells.",
    //   imageUrl: "/images/MalariaDiagnosis.png",
    // },
    // {
    //   title: "Phylogenetic tree of SARS-COV-2 variants in different countries",
    //   description:
    //     "Created a phylogenetic tree of SARS-COV-2 variants in different countries using RStudio program and NCBI database.",
    //   imageUrl: "/images/SARS-COV-2PhylogeneticTree.png",
    // },
    {
      title: "SOLFund",
      description:
        "A blockchain-based crowdfunding platform that allows users to create and invest in projects using the Solana blockchain.",
      imageUrl: "/images/SolFund.png",
      link: "https://sol-funding.vercel.app/",
    },
    {
      title: "Car Selling Web-App",
      description:
        "Developed a API REST with Node.js and Express.js for a car selling website, using SQL Server as database. The front-end was developed with React.js and Tailwind.",
      imageUrl: "/images/Car-Selling.png",
      link: "https://car-selling-website-tau.vercel.app/",
    },
    {
      title: "Scheduling Web-App",
      description:
        "Developed an automated scheduling system that makes it easier to manage your daily tasks.",
      imageUrl: "/images/SchedulingApp.png",
      link: "https://compass-app.vercel.app/",
    },
    {
      title: "My Portfolio",
      description:
        "This is my portfolio, where I show my projects and my skills.",
      imageUrl: "/images/MyPortfolio.png",
      link: "https://diegopartida-portfolio.vercel.app/",
    },
  ];

  return (
    <div className="mt-12" id="projects">
      <hr className="border-2 border-gray-200 w-1/4 mx-auto" />

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        Projects
      </h1>
      <div className="max-w-3xl mx-auto p-8 text-xl text-gray-600">
        <p className="mt-4 mx-auto text-center">
          These projects exemplify my passion for coding and my diverse range of
          skills. They demonstrate my proficiency in various programming
          languages, frameworks, and technologies.
        </p>

        <p className="mt-4 mx-auto text-center">
          I strive for clean, efficient code that delivers exceptional results.
          Each project represents my problem-solving abilities, creativity, and
          commitment to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-8 px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full object-cover object-center rounded-t-lg animate-appearShort"
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

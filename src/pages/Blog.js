import React from "react";
import NavBar from "../components/NavBar";

function Blog() {
  return (
    <div className="mt-32 flex justify-center flex-col" id="blog">
      <NavBar />
      <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 text-center">
        Blog
      </h1>

      <div className="p-10 sm:px-20 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-gray-800">
          A personal view of the history of testing in software systems
        </h2>

        <p className="mt-4">
          Software testing has come a long way since its humble beginnings in
          the mid-20th century. In the early days, testing was largely manual
          and ad-hoc, with developers simply using the software themselves to
          try to find bugs. As software became more complex, however, it became
          clear that more rigorous and systematic testing was needed.
        </p>

        <p className="mt-4">
          In the 1970s and 1980s, a number of new testing methodologies and
          tools were developed, such as black-box testing, white-box testing,
          and regression testing. These methodologies provided a more systematic
          approach to testing, and the new tools helped to automate many of the
          repetitive tasks involved.
        </p>

        <p className="mt-4">
          In the 1990s, software testing became increasingly integrated with the
          software development lifecycle (SDLC). This led to the emergence of
          new concepts such as continuous testing and quality assurance (QA).
          Continuous testing involves testing software throughout the
          development process, rather than just at the end. QA is a broader
          discipline that encompasses all aspects of software quality, including
          testing, requirements management, and risk management.
        </p>

        <p className="mt-4">
          In recent years, software testing has continued to evolve, with new
          technologies and trends emerging all the time. For example, the rise
          of DevOps has led to a greater focus on automated testing and
          continuous integration and continuous delivery (CI/CD). Artificial
          intelligence (AI) is also beginning to play a role in software
          testing, with new tools and techniques being developed to help testers
          automate tasks such as test case generation and defect detection.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-10">Conclusion</h3>

        <p className="mt-4">
          Software testing has come a long way since its early days. Today, it
          is a mature and well-established discipline with a wide range of
          methodologies and tools available. Software testing is essential for
          ensuring the quality of software, and it plays a vital role in the
          software development lifecycle.
        </p>

        <p className="mt-4">
          I am excited about the future of software testing, and I believe that
          it will continue to evolve and innovate as software becomes
          increasingly complex and critical to our everyday lives.
        </p>
      </div>

      <div className="p-10 sm:px-20 text-gray-700 text-lg">
        References:
        <ul className="list-disc list-inside pl-1">
          <li>
            <a
              href="https://www.geeksforgeeks.org/history-of-software-testing/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              https://www.geeksforgeeks.org/history-of-software-testing/
            </a>
          </li>
          <li>
            <a
              href="https://dogq.io/blog/a-brief-history-of-software-testing/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              https://dogq.io/blog/a-brief-history-of-software-testing/
            </a>
          </li>
          <li>
            <a
              href="https://www.softwaretestinghelp.com/what-is-software-testing/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              https://www.softwaretestinghelp.com/what-is-software-testing/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;

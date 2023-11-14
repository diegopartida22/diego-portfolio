import React from "react";
import NavBarBlog from "../components/NavBarBlog";
import Footer from "../components/Footer";
import Atropos from "atropos/react";

function Blog() {
  const blogs = [
    {
      title: "A personal view of the history of testing in software systems",
      description:
        "Software testing has come a long way since its humble beginnings in the mid-20th century. In the early days, testing was largely manual and ad-hoc, with developers simply using the software themselves to try to find bugs. As software became more complex, however, it became clear that more rigorous and systematic testing was needed.",
      imageUrl:
        "https://www.indiumsoftware.com/wp-content/uploads/2022/08/115-7-Reasons-Why-Software-Testing-is-Important.jpg",
      link: "/blog/history-of-testing",
      date: "October 18, 2023",
    },

    // Cooming soon
    {
      title: "Cooming soon",
      description: "Stay tuned for more blogs coming soon!",
      imageUrl:
        "https://media.istockphoto.com/id/1356466745/vector/vector-illustration-coming-soon-banner-with-clock-sign.jpg?s=612x612&w=0&k=20&c=B3zjuvyrKLWPXmadC1TptchLH6et9P9-Nrr76Pia8Lo=",
      link: "/blog",
      date: "...",
    },
  ];

  return (
    <div className="mt-32 flex justify-center flex-col" id="blog">
      <NavBarBlog />

      <div className="w-full sm:w-3/4 mx-auto">
        <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 text-center">
          Discover all my blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-8 px-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
              onClick={() => window.open(blog.link, "_blank")}
            >
              <Atropos>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full object-cover object-center rounded-t-lg animate-appearShort"
                />
              </Atropos>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {blog.title}
                </h2>

                <p className="text-blue-500 text-sm my-2">{blog.date}</p>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:bottom-0 relative sm:absolute w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;

import React from "react";

function Contact() {
  return (
    <div className="mt-12">
      <hr className="border-2 border-gray-200 w-1/2 mx-auto" />
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 flex justify-center mt-8">
        Contact
      </h1>
      <div className="flex flex-row items-center justify-center mt-8 gap-12">
        <div>
          <a
            href="https://www.linkedin.com/in/diegopartidaromero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-indigo-500 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/diegopartida22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-indigo-500 flex items-center ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.7 -.3 5.5 -1.3 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a11.7 11.7 0 0 0 -6 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.7 2.8 5.7 5.5 6c-.6 .6 -.6 1.5 -.5 2v3.5" />
            </svg>
            GitHub
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/diegopartida22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-indigo-500 flex items-center ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mr-2"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1 -3.83 -3.83" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-8">
        {/* <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-800">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-lg font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;

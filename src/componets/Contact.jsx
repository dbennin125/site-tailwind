import React from "react";

export const Contact = () => {
  // lg:h-4/6 flex-space-between justify-center items-center
  // m:h-screen flex-space-between justify-center items-center
  // sm:h-screen h-screen flex flex-space-between justify-center items-center
  return (
    <div
      id="contact"
      className="bg-white h-screen flex flex-col justify-center items-center"
    >
      <ul
        className="bg-white flex 
        h-20
        flex-col justify-center items-center
        lg:flex-row justify-center items-center
        "
      >
        {/* <h1 className="contact-card font-mono text-3xl shadow-2xl">Contact</h1> */}
        <li className="contact-card">
          <svg
            className="w-8 h-8 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h1 className="contact-font">portland, or, usa</h1>
        </li>
        <li className="contact-card xl:mr-12 ml:12 flex-shrink-0 lg:mr-12 ml-12">
          <svg
            className="w-8 h-8 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <address>
            <a
              href="mailto:dbennington125@gmail.com"
              alt="link to email:dbennington125@gmail.com"
              className="contact-font"
            >
              dbennington125@gmail
            </a>
          </address>
        </li>
        <li className="contact-card ">
          <svg
            className="w-8 h-8 m-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <a
            href="https://www.linkedin.com/in/dan-bennington/"
            alt="link to LinkedIn:https://www.linkedin.com/in/dan-bennington/"
            className="contact-font"
          >
            dan-bennington
          </a>
        </li>
      </ul>
    </div>
  );
};

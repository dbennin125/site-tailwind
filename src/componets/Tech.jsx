import React from "react";
import { Link } from "react-scroll";

export const Tech = () => {
  return (
    <>
      <div className="h-screen center-content text-center px-3" id="buzzword">
        <h1 className="font-mono text-4xl">
          Buzzwords
          <p className="text-2xl mt-3 mb-2">Tools</p>
          <p className="tech-font">
            Git, GitHub, Jest, Enzyme, QUnit, Heroku, Netlify
          </p>
          <p className="text-2xl mt-3 mb-2">Languages</p>
          <p className="tech-font">JavaScript, Python, TypeScript, HTML/CSS</p>
          <p className="text-2xl mt-3 mb-2">Libraries/Frameworks</p>
          <p className="tech-font">
            React, Node.js, Express.js, Chakra, TypeORM, Next.js, Mongoose
          </p>
          <p className="text-2xl mt-3 mb-2">Databases</p>
          <p className="tech-font"> Postgres, MongoDB</p>
        </h1>
        <Link
          className="pt-8"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-55}
          duration={750}
          to="contact"
        >
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

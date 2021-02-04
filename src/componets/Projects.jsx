import React from "react";
import { Link } from "react-scroll";

export const Projects = () => {
  return (
    <div className="h-screen center-content px-5 t-20 pt-20 mt-3" id="tech">
      <p>Under construction</p>
      <Link
        className="py-2 cursor-pointer hover:shadow-2xl"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={750}
        to="buzzword"
      >
        <svg
          className="w-6 h-6 mb-3 hover:bg-white hover:shadow-2xl"
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
  );
};

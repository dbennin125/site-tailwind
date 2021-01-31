import React from "react";
import { Link } from "react-scroll";

export const Splash = () => {
  return (
    <div
      className="bg-white h-screen flex flex-col justify-center px-3 items-center  py-40 z-1"
      id="splash"
    >
      <h1 className="font-mono pb-10 text-center lg:text-10xl md:text-8xl sm:text-5xl text-3xl mb-4">
        Let’s make something!
      </h1>
      <p className="text-center  font-mono font-black mb-14">
        Hi! I’m Dan Bennington. Full Stack Software Engineer. Technical Problem
        Solver. Dog Owner.
      </p>
      <Link
        className="cursor-pointer 
        lg:py-6 px-10 bg-black-500 rounded-full text-3xl hover:bg-black-300 transition duration-500 ease-in-out flex items-center animate-bounce 
        md:py-5 px-9 bg-black-500 rounded-full text-2xl hover:bg-black-300 transition duration-700 ease-in-out flex items-center animate-bounce
        py-2 px-4 hover:bg-white hover:shadow-2xl"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={750}
        to="about"
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
        About Me
        <svg
          className="w-6 h-6 ml-3"
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

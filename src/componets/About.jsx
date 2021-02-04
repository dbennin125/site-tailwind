import React from "react";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <div
      className="h-screen center-content t-20 pt-20 px-3 mt-22 bg-white"
      id="about"
    >
      <p className="about-font mt-7 pb-10 ">
        I’m a full stack software engineer with a knack for crafting clean,
        tested, and modular code. With a keen eye on the end goal, whether in a
        mob, pairs, or solo, I take pride in executing the task, solving
        problems along the way, and overall going above and beyond. Guiding the
        user experience through well written code and a thoughtfully built site
        is always the objective. I own a very cute dog who has been known to
        make appearances on Zoom calls.
      </p>
      <img
        className="shadow-md h-1/3 w-auto"
        src="/festiveGus.jpg"
        alt="Gus the dog"
      />
      <Link
        className="pt-8 cursor-pointer "
        activeClass="active"
        spy={true}
        smooth={true}
        offset={4}
        duration={750}
        to="tech"
      >
        <svg
          className="w-7 h-7 mb-3"
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

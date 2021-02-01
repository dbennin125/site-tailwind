import React from "react";
import { Link } from "react-scroll";

export const NavBar = ({ toggle }) => {
  //fun code for hover effect, change color
  //maybe too much for site
  //hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 sticky z-40 top-16
  return (
    <div className="bg-white sticky z-40 top-0">
      <nav
        className="font-mono flex justify-between items-center h-20 bg-white text-black shadow-md z-40"
        role="navigation"
      >
        {/* <h1 className="pl-7 xl:text-xl md:text-2xl text-black">
          Dan Bennington
        </h1> */}
        <Link
          activeClass="false"
          to="splash"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
          className="pl-7 text-2xl"
        >
          Dan Bennington
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        {/* AddBack Hidden after block line 36 */}
        <div className="pr-8 md:block hidden">
          <Link
            spy={true}
            smooth={true}
            offset={-5}
            duration={500}
            className="p-4 cursor-pointer "
            to="splash"
          >
            Top
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
            className="p-4 cursor-pointer"
            to="about"
          >
            About
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="p-4 cursor-pointer"
            to="tech"
          >
            Tech
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={7}
            duration={500}
            to="contact"
            className="p-4 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

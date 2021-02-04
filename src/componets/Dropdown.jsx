import React from "react";
import { Link } from "react-scroll";

export const Dropdown = ({ onOpen, toggle }) => {
  return (
    <div
      className={
        onOpen
          ? `grid h-3/5 grid-rows-4 text-center 
          items-center bg-white text-black sticky 
          z-40 top-16 hover:bg-white hover:shadow-lg
          focus:ring-2 focus:ring-red-500 -mt-30
  
          `
          : "block hidden"
      }
    >
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-222}
        duration={750}
        onClick={toggle}
        className="p-4 cursor-pointer"
        to="splash"
      >
        Top
      </Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-220}
        duration={750}
        onClick={toggle}
        className="p-4 cursor-pointer"
        to="about"
      >
        About
      </Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-230}
        duration={750}
        onClick={toggle}
        className="p-4 cursor-pointer"
        to="tech"
      >
        Tech
      </Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-230}
        duration={750}
        onClick={toggle}
        className="p-4 cursor-pointer"
        to="contact"
      >
        Contact
      </Link>
    </div>
  );
};

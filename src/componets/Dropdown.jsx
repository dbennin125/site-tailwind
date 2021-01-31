import React from "react";
import { Link } from "react-scroll";

export const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? `grid h-3/5 grid-rows-4 text-center 
          items-center bg-white text-black sticky 
          z-40 top-16 hover:bg-white hover:shadow-lg
          focus:ring-2 focus:ring-red-500
          active:red
          `
          : "block hidden"
      }
    >
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-230}
        duration={500}
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
        offset={-230}
        duration={500}
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
        offset={0}
        duration={500}
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
        offset={-400}
        duration={500}
        onClick={toggle}
        className="p-4 cursor-pointer"
        to="contact"
      >
        Contact
      </Link>
    </div>
  );
};

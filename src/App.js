import "./App.css";
import React, { useState, useEffect } from "react";
import { Contact } from "./componets/Contact";
import { About } from "./componets/About";
import { Dropdown } from "./componets/Dropdown";
import { Footer } from "./componets/Footer";
import { NavBar } from "./componets/NavBar";
import { Splash } from "./componets/Splash";
import { Tech } from "./componets/Tech";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Splash />
      <About />
      <Tech />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./NavBar.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const NavBar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50; // Adjust the scroll threshold as needed
      setNavbarVisible(!isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
      <a href="#section1">Home</a>
      <a href="#section2">About</a>
      <a href="#section3">Our Team</a>
      <a href="#section4">Case 1</a>
      <a href="#section5">Case 2</a>
      <a href="#section6">Case 3</a>
      <a href="#section7">End</a>
    </div>
  );
};

export default NavBar;

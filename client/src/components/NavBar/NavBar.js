import React, { useState, useEffect } from "react";
import "./NavBar.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const NavBar = ({ highlight }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const sections = [
    "Home",
    "About",
    "Our Team",
    "Case 1",
    "Case 2",
    "Case 3",
    "End",
  ];

  const handleMouseOver = () => {
    setNavbarVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (initialLoad) {
        setInitialLoad(false);
        return;
      }
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50;

      // Adjust the scroll threshold as needed
      setNavbarVisible(!isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialLoad]);

  return (
    <div onMouseOver={handleMouseOver} className="mousehover">
      <div className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
        {sections.map((buttonName, index) => {
          if (Number(highlight.substring(7)) === index + 1) {
            return (
              <div className="navbar-button-container">
                <a
                  href={`#section${index + 1}`}
                  className={`nav-button-highlighted-${index + 1}`}
                >
                  {buttonName}
                </a>
              </div>
            );
          } else {
            return (
              <div className="navbar-button-container ">
                <a href={`#section${index + 1}`} className={`nav-${index + 1}`}>
                  {buttonName}
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NavBar;

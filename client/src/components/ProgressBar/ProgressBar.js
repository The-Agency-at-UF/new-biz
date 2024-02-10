import React, { useEffect } from "react";
import "./ProgressBar.css";

// examples used:
// Scroll Bar: https://codepen.io/DevSkyler/details/QWqOdmp

const ProgressBar = ({ highlight }) => {
  const sections = [
    "Home",
    "About",
    "Our Team",
    "Case 1",
    "Case 2",
    "Case 3",
    "End",
  ];

  // so refresh doesn't reset the scroll bar
  useEffect(() => {
    const scroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    if (scrolled >= 0) {
      document.getElementById("progressbar").style.height =
        86.5 - scrolled + "%";
    }
  }, []);

  // will update on scrolling
  window.addEventListener("scroll", function () {
    // function for the progress bar
    const progressBar = document.getElementById("progressbar");

    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (scroll / height) * 100;
      if (scrolled >= 0) {
        progressBar.style.height = 86.5 - scrolled + "%";
      }
    };
  });

  return (
    <div className="progress-container">
      <div className="sections">
        {sections.map((buttonName, index) => {
          if (Number(highlight.substring(7)) === index + 1) {
            return (
              <div
                className={`nav-button nav-button-highlighted nav-${index + 1}`}
              >
                {buttonName}
              </div>
            );
          } else {
            return (
              <div className={`nav-button nav-${index + 1}`}>{buttonName}</div>
            );
          }
        })}
      </div>
      <div id="progressbar" className="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;

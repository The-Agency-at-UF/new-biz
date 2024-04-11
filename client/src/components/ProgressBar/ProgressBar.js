import React, { useEffect } from "react";
import "./ProgressBar.css";

// examples used:
// Scroll Bar: https://codepen.io/DevSkyler/details/QWqOdmp

const ProgressBar = () => {
  // so refresh doesn't reset the scroll bar
  useEffect(() => {
    const scroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    if (scrolled >= 0) {
      document.getElementById("progressbar").style.height =
        scrolled + "%";
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
        progressBar.style.height = scrolled + "%";
      }
    };
  });

  return (
    <div className="progress-container">
      <div id="progressbar" className="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;

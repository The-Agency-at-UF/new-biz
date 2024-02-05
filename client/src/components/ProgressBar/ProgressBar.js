import React from "react";
import "./ProgressBar.css";

// examples used:
// Scroll Bar: https://codepen.io/DevSkyler/details/QWqOdmp

const ProgressBar = () => {
    window.addEventListener('scroll', function() {
          // function for the progress bar
          const progressBar = document.getElementById("progressbar");
          progressBar.style.height = 100 + "%";
          
          window.onscroll = () => {
            const scroll = document.documentElement.scrollTop;
            const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (scroll / height) * 100;
          
            if (scrolled <= 1) {
              progressBar.style.height = 100 + "%";
            } 
            else if (scrolled >= 2 && scrolled <= 100) {
              progressBar.style.height = (100-scrolled) + "%";
            }
            console.log(100-scrolled);
          }
  });

  return (
    <div className="progress-container">
        <div id="progressbar" className="progress-bar"></div>
      </div>
  );
};

export default ProgressBar;

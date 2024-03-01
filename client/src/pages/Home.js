// This is the main component we will add all other components to the site here
import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../components/Banner/Banner";
import Intro from "../components/Intro/Intro";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [current, setCurrent] = useState("section1");
  let sections = document.querySelectorAll("div.section");
  useEffect(() => {
    sections = document.querySelectorAll("div.section");
  }, []);

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      // get pixel value of section from the top of the page to the top of the section
      const sectionTop = section.offsetTop;
      // get pixel value of
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setCurrent(section.getAttribute("id"));
      }
    });
  });

  return (
    <div>
      <NavBar highlight={current}></NavBar>
      <ProgressBar></ProgressBar>
      <div id="section1" className="section">
        <Intro />
      </div>
      <div id="section2" className="section"></div>
      <div id="section3" className="section">
        <h1>Our Clients?</h1>
        <p className="paragraph">
          Fun way to phrase?? I know redpepper studio in Nashville says “we keep
          damn good company.” Completely fine keeping our clients, but it could
          be fun to infuse personality - like “the kind of company we keep” idk
          but just a thought
        </p>
        <Banner />
      </div>
      <div id="section4" className="section">
        <h1>Case 1</h1>
      </div>
      <div id="section5" className="section">
        <h1>Case 2</h1>
      </div>
      <div id="section6" className="section">
        <h1>Case 3</h1>
      </div>
      <div id="section7" className="section">
        <h1>End</h1>
      </div>
    </div>
  );
};

export default Home;

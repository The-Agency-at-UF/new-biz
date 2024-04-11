import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../components/Banner/Banner";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Team from "../components/Team/Team";
import NewTeam from "../components/Team/NewTeam";
//this is a test
import WhoWeAre from "../components/WhoWeAre/WhatWeOffer";
import Alexa from "../case-studies/Alexa/Alexa";

const Home = () => {
  const [current, setCurrent] = useState("section1");
  let sections = document.querySelectorAll("div.section");
  useEffect(() => {
    sections = document.querySelectorAll("div.section");
  }, []);

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setCurrent(section.getAttribute("id"));
      }
    });
  });

  return (
    <div className="main">
      <NavBar highlight={current}></NavBar>
      <ProgressBar></ProgressBar>
      <div id="section1" className="section">
        <Intro />
      </div>
      <div id="section2">
        <WhoWeAre />
      </div>
      <div id="section3" className="section">
        <h1 className="meet-team-header">MEET THE TEAM</h1>
        <div className="team-section">
          <div className="team-scroll-container">
            <Team />
          </div>
        </div>
      </div>
      <div id="section4">
        <h1>We synergize with the best</h1>
        <Banner />
      </div>
      <div id="section5" className="section">
      <Alexa/>
      </div>
      <div id="section6" className="section">
      <h1>Case2</h1>
      </div>
      <div id="section7" className="section">
      <h1>Case3</h1>
      </div>
    </div>
  );
};

export default Home;

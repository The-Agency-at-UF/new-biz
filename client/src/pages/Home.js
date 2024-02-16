// This is the main component we will add all other components to the site here
import React from "react";
import "./Home.css";
import Banner from "../components/Banner/Banner";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Home = () => {
  return (
    <div>
      <div className="sections">
        <div className="nav-button nav-1">Home</div>
        <div className="nav-button nav-2">About</div>
        <div className="nav-button nav-3">Our Team</div>
        <div className="nav-button nav-4">Case 1</div>
        <div className="nav-button nav-5">Case 2</div>
        <div className="nav-button nav-6">Case 3</div>
        <div className="nav-button nav-7">End</div>
      </div>
      <ProgressBar />
      <div id="section1">
        <Intro />
      </div>
      <div id="section2"></div>
      <div id="section3">
        <h1>Our Clients?</h1>
        <p className="paragraph">
          Fun way to phrase?? I know redpepper studio in Nashville says “we keep
          damn good company.” Completely fine keeping our clients, but it could
          be fun to infuse personality - like “the kind of company we keep” idk
          but just a thought
        </p>
        <Banner />
      </div>
      <div id="section4">
        <h1>Case 1</h1>
      </div>
      <div id="section5">
        <h1>Case 2</h1>
      </div>
      <div id="section6">
        <h1>Case 3</h1>
      </div>
      <div id="section7">
        <h1>End</h1>
      </div>
    </div>
  );
};

export default Home;

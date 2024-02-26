// This is the main component we will add all other components to the site here
import React from "react";
import "./Home.css";
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro';
import NavBar from '../components/NavBar/NavBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Team from '../components/Team/Team';

const Home = () => {
return (
    <div>
      <NavBar/>
      <ProgressBar/>
      <div id="section1" className="section">
        <Intro />
      </div>
      <div id="section2" className="section">
          <h1 className="section2-header">MEET OUR TEAM</h1>
          <Team className="team-section" />
      </div>
      <div id="section3" className="section">
          <h1>Our Clients?</h1>
          <p>Fun way to phrase?? I know redpepper studio in Nashville says “we keep damn good company.” Completely fine keeping our clients, but it could be fun to infuse personality - like “the kind of company we keep” idk but just a thought</p>
          <Banner/>
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

import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./Home.css";

// import components
import Banner from "../components/Banner/Banner";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Team from "../components/Team/Team";
import NewTeam from "../components/Team/NewTeam";

import WhoWeAre from "../components/WhoWeAre/WhatWeOffer";
import GatorsUnidos from "../case-studies/GatorsUnidos/GatorsUnidos";
import Header from "../components/Header/Header.tsx";


const Home = () => {
  const location = useLocation();

    useEffect(() => {
        // Check if the URL contains a fragment identifier
        if (location.pathname === '/home') {
          // Scroll to Home
          const home = document.getElementById('home');
          if (home) {
            home.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (location.pathname === '/about') {
          // Scroll to About Us
          const aboutUs = document.getElementById('about');
          if (aboutUs) {
            aboutUs.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (location.pathname === '/meet-the-team') {
          // Scroll to Meet the Team
          const meetTheTeam = document.getElementById('meet-the-team');
          if (meetTheTeam) {
            meetTheTeam.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (location.pathname === '/our-clients') {
          // Scroll to Our Clients
          const ourClients = document.getElementById('our-clients');
          if (ourClients) {
            ourClients.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, [location.pathname]);

  return (
    <div className="main">
      <Header></Header>
      {/*    <ProgressBar></ProgressBar> */}
      <div id="home">
        <Intro />
      </div>
      <div id="about">
        <WhoWeAre />
      </div>
      <div id="meet-the-team">
        <h1>MEET THE TEAM</h1>
        <Team/>
      </div>
      <div id="our-clients">
        <div className="banner-container">
          <h1 className="banner-text">We synergize with the best</h1>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;

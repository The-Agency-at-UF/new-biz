import React, { useRef, useEffect } from "react";
import logoImg from "../../images/Logo.png";
import { Fade, Zoom } from "react-awesome-reveal";
import "./Intro.css";

/*https://codesandbox.io/s/fxjve?file=/package.json*/

const Intro = () => {
  const scrollElement = useRef(null);

  const handleClick = () => {
    scrollElement.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="main">
      <div className="logo-container">
        <Zoom triggerOnce>
          <img className="logo-image" src={logoImg} alt="" />
        </Zoom>
      </div>
      <div onClick={handleClick} class="arrow"></div>

      <div ref={scrollElement} className="invisible-div"></div>
      <Fade direction="up">
        <h1 className="intro-title">WE ARE</h1>
        <p className="intro-p">
          A strategic communications firm led by professionals and staffed by
          students who are reimagining advertising and public relations.
        </p>
        <p className="intro-p">
          We're a team of bold students with an unparalleled motivation to the
          best work for anyone seeking it. We are researchers, managers,
          creatives and coordinators - but most of all, we are the ambitious
          youth setting the precedent in communications.
        </p>
      </Fade>
      <h1 className="text-glow glow intro-title">
        WE ILLUMINATE THE CULTURAL STAGE WITH GEN Z PASSION
      </h1>
    </div>
  );
};

export default Intro;

import React, {useRef, useEffect} from 'react';
import logoImg from '../../Images/Logo.png';
import { Fade } from "react-awesome-reveal";
import './Intro.css'

/*https://codesandbox.io/s/fxjve?file=/package.json*/
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const glowingTexts = document.getElementsByClassName("text-glow");
        const windowOffsetTop = window.innerHeight + window.scrollY;
            
        Array.prototype.forEach.call(glowingTexts, (glowingText) => {
            const glowingTextOffsetTop = glowingText.offsetTop;
            
            if (windowOffsetTop >= glowingTextOffsetTop) {
                addClass(glowingText, "glow");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

const Intro = () => {

    return (
        <div>
            <img className = "logo-image" src={logoImg} alt="" />
            <div class="arrow"></div>
            <Fade direction='up'>
                <h1>WE ARE</h1>
                <p>A strategic communications firm led by professionals and staffed by students who are reimagining advertising and public relations.</p>
                <p>We're a team of bold students with an unparalleled motivation to the best work for anyone seeking it. We are researchers, managers, creatives and coordinators - but most of all, we are the ambitious youth setting the precedent in communications.</p>
            </Fade>
            <h1 className = "text-glow">WE ILLUMINATE THE CULTURAL STAGE WITH GEN Z PASSION</h1>
        </div>


    )
}

export default Intro;

import React, {useEffect} from 'react';
import logoImg from '../../Images/Logo.png';
import downArrow from '../../Images/down-arrow.svg'
import './Intro.css'

const Intro = () => {
    useEffect(() => {
        const textGlowElement = document.querySelector('.text-glow');
        
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('glow-effect');
                    observer.unobserve(entry.target); // Unobserve once the element is in view
                }
            });
        }, observerOptions);

        if (textGlowElement) {
            intersectionObserver.observe(textGlowElement);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            if (intersectionObserver) {
                intersectionObserver.disconnect();
            }
        };
    }, []);

    return (
        <div>
            <img class = "logo-image" src={logoImg} alt="" />
            <img class = "arrow-styling" src={downArrow} alt="" />
            <h1>WE ARE</h1>
            <p>A strategic communications firm led by professionals and staffed by students who are reimagining advertising and public relations.</p>
            <p>We're a team of bold students with an unparalleled motivation to the best work for anyone seeking it. We are researchers, managers, creatives and coordinators - but most of all, we are the ambitious youth setting the precedent in communications.</p>
            <h1 class = "text-glow">WE ILLUMINATE THE CULTURAL STAGE WITH GEN Z PASSION</h1>
        </div>


    )
}

export default Intro;
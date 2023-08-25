import React, {useRef, useEffect, useState} from 'react';
import logoImg from '../../Images/Logo.png';
import downArrow from '../../Images/down-arrow.svg'
import './Intro.css'

const Intro = () => {

    const canvasRef = useRef(null)

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

    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        const rotationY = (deltaX / centerX) * 10; // Adjust the sensitivity as needed
        const rotationX = -(deltaY / centerY) * 10; // Adjust the sensitivity as needed

        setRotation({ x: rotationX, y: rotationY });
    };

    
    return (
        <div>
            <div className="image-container" onMouseMove={handleMouseMove}>
                <div className='image-wrapper'>
                <img
                    src={logoImg} // Replace with your image URL
                    alt="Rotating Image"
                    className="image"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    }}
                />
                </div>
            </div>
            <img className = "arrow-styling" src={downArrow} alt="" />
            <h1>WE ARE</h1>
            <p>A strategic communications firm led by professionals and staffed by students who are reimagining advertising and public relations.</p>
            <p>We're a team of bold students with an unparalleled motivation to the best work for anyone seeking it. We are researchers, managers, creatives and coordinators - but most of all, we are the ambitious youth setting the precedent in communications.</p>
            <h1 className = "text-glow">WE ILLUMINATE THE CULTURAL STAGE WITH GEN Z PASSION</h1>
        </div>


    )
}

export default Intro;
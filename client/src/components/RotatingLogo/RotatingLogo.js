import React, {useState} from 'react';
import logoImg from '../../images/Logo.png';
import "./RotatingLogo.css";

const RotatingLogo = () => {

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

        const rotationY = (deltaX / centerX) * 14; // Adjust the sensitivity as needed
        const rotationX = -(deltaY / centerY) * 14; // Adjust the sensitivity as needed

        setRotation({ x: rotationX, y: rotationY });
    };

  return (
    <div className="image-container" onMouseMove={handleMouseMove}>
                <div className='image-wrapper'>
                <img
                    src={logoImg}
                    alt="Rotating Image"
                    className="image"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    }}
                />
                </div>
            </div>
  );
};

export default RotatingLogo;

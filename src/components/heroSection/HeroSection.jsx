import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import logoLine from '/src/assets/images/line.png';
import './HeroSection.css';

function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const delayAnimation = setTimeout(() => {
      gsap.to(textElement, {
        opacity: 1,
        y: 0, // Adjust this value to control the distance from which it comes
        duration: 1,
      });
    }, 500); // Adjust this value to control the delay time in milliseconds

    return () => clearTimeout(delayAnimation);
  }, []);

  return (
    <div className='hero-section'>
      <video autoPlay loop muted className="background-video">
        <source src='/src/assets/images/video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <img src={logoLine} alt="line" className='logo-line' />
        <h1 ref={textRef}>
          Welcome to
          <br />
          SHELTER BUILDINGS
        </h1>
        <p>Building Dreams, Brick by Brick</p>
        <p>(Crafting Your Vision into Reality)</p>
      </div>
    </div>
  );
}

export default HeroSection;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import engineer from '/src/assets/images/engineer.png';
import element from '/src/assets/images/Graphical-Element.png';
import './Message.css';

function Message() {
  const messageRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const messageElement = messageRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(messageElement, { opacity: 1, duration: 1 });
          gsap.to(textElement, { opacity: 1, x: 0, duration: 1 });
          gsap.to(imageElement, { opacity: 1, x: 0, duration: 1 });
          observer.unobserve(entry.target);
        } else {
          gsap.to(messageElement, { opacity: 0, duration: 1 });
          gsap.to(textElement, { opacity: 0, x: '-=50', duration: 1 });
          gsap.to(imageElement, { opacity: 0, x: '+=50', duration: 1 });
        }
      });
    }, observerOptions);

    observer.observe(messageElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='message' ref={messageRef}>
      <div className="message-content">
        <div className='text' ref={textRef}>
          <h1 className='head'>WELCOME</h1>
          <p>
            iT Central is coined from two words: Ultimate & Graphics. We started with the mindset of rendering ultimate (best) graphic design services. With this ‘Ultimate’ mindset we have evolved into an agency that provides Innovative Branding solutions for businesses, organisations and individuals.
          </p>
          <p><b>Feel at home, Welcome.</b></p>
        </div>
        <div className="img" ref={imageRef}>
          <img src={engineer} alt="Engineer" className='engineer' />
          <img src={element} alt="element" className='element' />
        </div>
      </div>
    </div>
  );
}

export default Message;

import React, { useEffect, useRef, useState } from 'react';
import './ServicesBrand.css';
import line from '/src/assets/images/line.png';
import longline from '/src/assets/images/longLine.svg';

function ServicesBrand() {
  const [isBrandVisible, setIsBrandVisible] = useState(false);
  const brandRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBrandVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (brandRef.current) {
      observer.observe(brandRef.current);
    }

    return () => {
      if (brandRef.current) {
        observer.unobserve(brandRef.current);
      }
    };
  }, []);

  return (
    <div className="services-brand">
      <div className="services-brand-contents">
        <img src={line} alt="" />
        <div ref={brandRef} className={`brand-text ${isBrandVisible ? 'visible' : ''}`}>
          <h2>Branding</h2>
        </div>
        <p>
          Branding is the heart of our services. It is about sending a message to your customers about what you represent, creating an impression, and ultimately giving them a perception of your uniqueness, values, vision, and ultimately; expectations.
        </p>
        <p>
          Branding is the heart of our services. It is about sending a message to your customers about what you represent, creating an impression, and ultimately giving them a perception of your uniqueness, values, vision, and ultimately; expectations.
        </p>
        <img src={longline} alt="longline" />
      </div>
    </div>
  );
}

export default ServicesBrand;

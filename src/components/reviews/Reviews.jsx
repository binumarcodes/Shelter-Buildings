import React, { useEffect, useRef, useState } from 'react';
import './Reviews.css';
import line2 from '/src/assets/images/line2.png';
import longline from '/src/assets/images/longLine.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardReview from '../cardReview/CardReview';

function Reviews() {
  const [isReviewVisible, setIsBrandVisible] = useState(false);
  const reviewsRef = useRef(null);

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  return (
    <div className="reviews">
      <div className="reviews-contents">
        <img src={line2} alt="" />
        <div ref={reviewsRef} className={`brand-text ${isReviewVisible ? 'visible' : ''}`}>
          <h2>What Our <br /> Clients Say</h2>
        </div>
        <div className="card-container">
          <Carousel
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Auto play interval in milliseconds
            stopOnHover={true} // Stop auto play on hover
            transitionTime={500} // Slide transition time in milliseconds
            emulateTouch={true} // Enable touch swipe on desktop
            swipeable={true} // Enable swipe gestures
            dynamicHeight={false} // Adjust slide height dynamically
            selectedItem={0} // Initial selected item
            axis="horizontal" // Carousel direction
            centerMode={false} // Center current slide
          >
            <div>
              <CardReview
                name="John Doe"
                role="CEO"
                company="XYZ Corporation"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div>
              <CardReview
                name="Jane Smith"
                role="Designer"
                company="ABC Designs"
                quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            {/* Add more CardReview components here */}
          </Carousel>
        </div>
        <img src={longline} alt="longline" />
      </div>
    </div>
  );
}

export default Reviews;

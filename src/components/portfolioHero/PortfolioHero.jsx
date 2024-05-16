import React, { useState, useEffect } from 'react';
import './PortfolioHero.css';
import illustration1 from '/src/assets/images/illustration1.gif';

function PortfolioHero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [deleteText, setDeleteText] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [deletionCompleted, setDeletionCompleted] = useState(false);

  useEffect(() => {
    const textToTypeArray = [
      "We're happy to showcase our works",
      "Building the future, one project at a time",
      "Crafting quality structures that stand the test of time"
    ];

    let currentIndex = 0;
    let deleteIndex = 0;

    const typeTextInterval = setInterval(() => {
      if (deleteText) {
        // Delete the text letter by letter
        if (deleteIndex <= textToTypeArray[currentTextIndex].length) {
          setTypedText(textToTypeArray[currentTextIndex].substring(0, textToTypeArray[currentTextIndex].length - deleteIndex));
          deleteIndex++;
        } else {
          // Start typing the next text after a delay
          if (deletionCompleted) {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textToTypeArray.length);
            setDeleteText(false);
            deleteIndex = 0; // Reset deleteIndex for the next text
            setDeletionCompleted(false);
          }
        }
      } else {
        // Type the text letter by letter
        if (currentIndex <= textToTypeArray[currentTextIndex].length) {
          setTypedText(textToTypeArray[currentTextIndex].substring(0, currentIndex));
          currentIndex++;
        } else {
          // Set deleteText to true after typing completes
          setTimeout(() => {
            setDeleteText(true);
            currentIndex = 0; // Reset currentIndex for the next text
            setDeletionCompleted(true);
          }, 2000); // Delay before deleting the text
        }
      }
    }, 100); // Adjust the interval as needed

    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Adjust the interval for cursor blinking as needed

    return () => {
      clearInterval(typeTextInterval);
      clearInterval(cursorInterval);
    };
  }, [deleteText, currentTextIndex, deletionCompleted]);

  return (
    <div className='portfolio-hero'>
      <div className="portfolio-left">
        <h1>
          {typedText}
          {showCursor && <span className="cursor">|</span>}
        </h1>
      </div>
      <div className="portfolio-right">
        <img src={illustration1} alt="" />
      </div>
    </div>
  );
}

export default PortfolioHero;

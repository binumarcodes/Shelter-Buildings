import React from 'react';
import './Section3.css';
import Button from '@mui/material/Button';



function Section3() {
  let items = [
    {
      img: '/src/assets/images/construction-1.jpg',
      head: 'Effective Road Construction',
      text: "Let’s walk you through an amazing journey of effective Logo Design & Visual Identity for your business / organization. We are good at what we do."
    },
    {
      img: '/src/assets/images/construction-2.webp',
      head: 'Effective House Construction',
      text: "Let’s walk you through an amazing journey of effective Logo Design & Visual Identity for your business / organization. We are good at what we do."
    },
    {
      img: '/src/assets/images/construction-3.webp',
      head: 'Effective Institution Construction',
      text: "Let’s walk you through an amazing journey of effective Logo Design & Visual Identity for your business / organization. We are good at what we do."
    }
  ];

  

  return (
    <div>
      {items.map((item, index) => (
          <div key={index} className="item">
            <div  style={{flexDirection: index%2==0?"row" : "row-reverse"}} className='section3'>
          <div className="left">
            <img src={item.img} alt="" />
          </div>
          <div className="right">
            <h2>{item.head}</h2>
            <p>{item.text}</p>
            <button class="custom-button">Get Started</button>
          </div>
        </div>
    </div>
      ))}
    </div>
  );
}

export default Section3;

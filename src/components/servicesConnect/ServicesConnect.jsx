import React from 'react'
import './ServicesConnect.css'
import line from '/src/assets/images/line.png'
import Button from '@mui/material/Button';


function ServicesConnect() {
  return (
    <div className='services-connect'>
      <div className="services-connect-contents">
        <img src={line} alt="" />
        <h2>Let's Connects</h2>
        <p>
            Creating compelling branding solutions is what we love doing. Influencing the growth of your business with the compelling branding is our delight. Let’s connect and make a positive impact.
        </p>
        <button class="custom-button">Contact Us</button>
      </div>
    </div>
  )
}

export default ServicesConnect

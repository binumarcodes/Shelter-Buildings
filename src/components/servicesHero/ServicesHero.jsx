import React from 'react'
import './ServicesHero.css'
import line from '/src/assets/images/line.png'

function ServicesHero() {
  return (
    <div className='services-hero'>
      <div className="services-content">
        <img src={line} alt="" className='services-line' />
        <h2>Our Services</h2>
      </div>
    </div>
  )
}

export default ServicesHero

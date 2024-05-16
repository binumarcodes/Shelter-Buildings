import React from 'react'

function PortfolioSection2() {
  return (
    <div className='portfolio-section2'>
      <video autoPlay loop muted className="background-video2">
        <source src='/src/assets/images/housing.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay2"></div>
      <div className="content2">
        {/* <img src={logoLine} alt="line" className='logo-line2' /> */}
      <h1>
        Welcome to
      </h1>
      <h1 className='nav-head2'>
      iT Central
      </h1>
      <p>Building Dreams, Brick by Brick</p>
      <p>(Crafting Your Vision into Reality)</p>
      </div>
    </div>
  )
}

export default PortfolioSection2

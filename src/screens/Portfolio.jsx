import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PortfolioHero from '../components/portfolioHero/PortfolioHero'
import WhatsappChat from '../components/elements/WhatsappChat'
import PortfolioSection2 from '../components/portfolioSection2/PortfolioSection2'
import SplineScene from '../components/spline/SplineScene'

function Portfolio() {
  return (
    <div>
      <Navbar />
      <WhatsappChat />
      <PortfolioHero />
      <SplineScene />
      <PortfolioSection2 />
    </div>
  )
}

export default Portfolio

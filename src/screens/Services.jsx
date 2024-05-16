import React from 'react'
import ServicesHero from '../components/servicesHero/ServicesHero'
import Navbar from '../components/navbar/Navbar'
import WhatsappChat from '../components/elements/WhatsappChat'
import ServicesBrand from '../components/servicesBrand/ServicesBrand'
import Section3 from '../components/section3/Section3'
import ServicesConnect from '../components/servicesConnect/ServicesConnect'


function Services() {
  return (
    <div>
      <Navbar />
      <WhatsappChat />
      <ServicesHero />
      <ServicesBrand />
      <Section3 />
      <ServicesConnect />
    </div>
  )
}

export default Services

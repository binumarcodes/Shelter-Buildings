import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import Message from '../components/message/Message'
import WhatsappChat from '../components/elements/WhatsappChat'
import Contact from '../components/contact/Contact'
import Reviews from '../components/reviews/Reviews'


function Welcome() {
  return (
    <div>
      <Navbar />
      <WhatsappChat />
      <HeroSection />
      <Message />
      <Contact />
      <Reviews />
    </div>
  )
}

export default Welcome

import { useState } from 'react'
import './App.css'
import Welcome from './screens/Welcome'
import Services from './screens/Services'
import Portfolio from './screens/Portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/default" element={<Welcome />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

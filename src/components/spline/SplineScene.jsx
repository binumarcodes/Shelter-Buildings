import React from 'react'
import Spline from '@splinetool/react-spline';


function SplineScene() {
  return (
    <div style={{ position: "relative"}}>
        <Spline scene="https://prod.spline.design/F0CCD8BtWRN6rknp/scene.splinecode" style={{ height: "100vh"}} />
        <h3 style={{ position: "absolute", top: "40%", left: "10%", color: "maroon", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} >Hover Around</h3>
        <h3 style={{ position: "absolute", top: "40%", left: "10%", color: "maroon", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} >Hover Around</h3>
        <h3 style={{ position: "absolute", top: "40%", right: "10%", color: "maroon", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} >the Cursor</h3>
        <h3 style={{ position: "absolute", bottom: "5%", left: "40%", color: "maroon", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} >Change the House's Color using the Three dots</h3>
        <h3 style={{ position: "absolute", top: "2%", left: "42%", color: "maroon", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} >Please wait for the Magic</h3>
    </div>
  ) 
}

export default SplineScene

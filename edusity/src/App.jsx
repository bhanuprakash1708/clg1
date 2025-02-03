import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const [playstate,setplaystate]=useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subtitle='My Program' title='What We Offer'></Title>
      <Program ></Program>
      <About setplaystate={setplaystate}></About>
      <Title subtitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>
      <Title subtitle='TESTIMONIALS' title='What Student Says'></Title>
      <Testimonial></Testimonial>
      <Title subtitle='CONTACT US' title='Get in touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      <VideoPlayer playstate={playstate} setplaystate={setplaystate}></VideoPlayer>
    </div>
  )
}

export default App
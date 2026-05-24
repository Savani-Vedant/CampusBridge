import React,{useState} from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Program from './components/programs/program'
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Videoplayer from "./components/videoPlayer/videoplayer";

const App = () => {

  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Our Students Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

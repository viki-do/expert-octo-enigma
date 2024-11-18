import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AnimatedText from './components/AnimatedText'
import BestInTheIndustry from './components/BestInTheIndustry';
import PoweringFrontierModels from './components/PoweringFrontierModels';


const App = () => {
  return (
    <div>
      <Nav />
      <AnimatedText />
      <BestInTheIndustry/>
      <PoweringFrontierModels/>
      <Footer />
    </div>
 
  )
}

export default App
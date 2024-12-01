import React from 'react'
import Nav from './components/Nav'
// import Footer from './components/Footer'
import AnimatedText from './components/AnimatedText'
import BestInTheIndustry from './components/BestInTheIndustry';
import PoweringFrontierModels from './components/PoweringFrontierModels';
import TrustedByLeadingCompanies from './components/TrustedByLeadingCompanies';
import EnterpriseScaleAndSecurity from './components/EnterpriseScaleAndSecurity';


const App = () => {
  return (
    <div>
      <Nav />
      <AnimatedText />
      <BestInTheIndustry/>
      <PoweringFrontierModels/>
      <TrustedByLeadingCompanies />  
      <EnterpriseScaleAndSecurity/>
      {/* <Footer /> */}
    </div>
 
  )
}

export default App
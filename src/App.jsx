import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AnimatedText from './components/AnimatedText'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <AnimatedText />
      <Footer />
    </Router>
  )
}

export default App
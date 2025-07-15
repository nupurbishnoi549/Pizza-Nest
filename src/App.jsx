import React from 'react'
import Header from './components/common/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Pizza from './components/Pizza';
import BestSellers from './components/BestSellers';
import Cravings from './components/Cravings';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Pizza />
      <BestSellers />
      <Cravings/>
    </>
  )
}

export default App

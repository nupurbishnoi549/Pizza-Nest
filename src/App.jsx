import React from 'react'
import Header from './components/common/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Pizza from './components/Pizza';
import BestSellers from './components/BestSellers';
import Cravings from './components/Cravings';
import LimitedOffer from './components/LimitedOffer';
import FoodDelivery from './components/FoodDelivery';
import EasySteps from './components/EasySteps';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import CravingSomething from './components/CravingSomething';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Pizza />
      <BestSellers />
      <Cravings />
      <LimitedOffer />
      <FoodDelivery />
      <EasySteps />
      <Testimonial/>
      <Gallery />
      <CravingSomething />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App

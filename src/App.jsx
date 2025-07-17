import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import BackToTop from './components/common/BackToTop';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,   
      offset: 100, 
    });
  }, []);

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
      <Testimonial />
      <Gallery />
      <CravingSomething />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;

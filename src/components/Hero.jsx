import React from 'react';
import heroBgImg from '../assets/images/webp/hero-bg-img.webp';
import Heading from './common/Heading';
import Description from './common/Description';
import CustomButton from './common/CustomButton';

const Hero = () => {
  return (
    <div id='home' className='lg:px-10 px-4 max-w-[1920px] mx-auto'>
      <div className='max-w-[1360px] mx-auto'>
        <div
          className="w-full bg-cover bg-center bg-no-repeat lg:min-h-[710px] sm:min-h-[600px] min-h-[540px] rounded-3xl object-cover"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        >
          <div className='lg:pt-[131px] sm:pt-14 py-8 lg:pl-[110px] sm:pl-6 pl-4'>
            <Heading headingText="Where Every Slice Feels Like Home" headingClass="text-white lg:max-w-[644px] max-w-[432px] lg:text-[64px] sm:text-[40px] max-sm:text-4xl font-bold" />
            <Description descriptionText="At Pizza Nest, we bake more than pizza — we bake comfort. Customize 
          your perfect slice, or choose from our signature favorites" descriptionClass="lg:max-w-[532px] max-w-[432px] text-[#EFEFEF] pt-4" />
            <div className='pt-8 pb-6 flex gap-6'>
              <CustomButton btnText="Order Now" btnClass="max-sm:px-5" />
              <CustomButton
                btnText="View Full Menu"
                btnClass="!bg-none !border-white border !backdrop-blur-[30.9px] !text-white !shadow-none  max-sm:!px-5 "
              />
            </div>
            <div className="flex flex-wrap gap-10 max-sm:gap-6 items-center">
              <div className="text-center">
                <Description descriptionText="5,000+" descriptionClass="text-custom-base text-white font-semibold !leading-120" />
                <Description descriptionText="Pizzas Delivered" descriptionClass="text-[#E1E1E1] font-semibold pt-[2px] !leading-120" />
              </div>
              <div className="h-[39px] w-[1px] bg-[#D5D5D5] max-sm:hidden"></div>
              <div className="text-center">
                <Description descriptionText="98%" descriptionClass="text-custom-base text-white font-semibold !leading-120" />
                <Description descriptionText="Happy Customers" descriptionClass="text-[#E1E1E1] font-semibold pt-[2px] !leading-120" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

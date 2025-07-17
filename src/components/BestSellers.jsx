import React from 'react';
import { PIZZA_DATA } from '../utils/helper';
import tomatoImg from '../assets/images/webp/tomato-img.webp';
import SubHeading from './common/SubHeading';
import CustomButton from './common/CustomButton';
import Heading from './common/Heading';
import Description from './common/Description';

const BestSellers = () => {
    return (
        <div id='customize' className="md:py-[100px] py-16 relative px-5 bg-[#F8F8F880] max-w-[1920px] mx-auto">
            <div className="absolute inset-0 bg-layer-section z-0" />
            <div
                className='absolute z-10 right-0 xl:top-[-13%] sm:top-[-8%] top-[-5%] hidden md:block'
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                <img
                    src={tomatoImg}
                    alt="tomatoImg"
                    className='lg:w-[200px] w-[125px] pointer-events-none'
                />
            </div>

            <div className="max-w-[1140px] relative z-10 mx-auto text-center">
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <SubHeading subText="Best Sellers" />
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>
                <Heading headingText='Pizzas You Can’t Say No To' headingClass='!mb-4 !text-near-black' />
                <Description descriptionClass='!text-charcoal-gray' descriptionText='Tried, tested, and totally loved. These pizzas are always a crowd favorite.' />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 xl:grid-cols-4 gap-6 md:pt-[125px] pt-24">
                    {PIZZA_DATA.map((pizza, idx) => (
                        <div
                            key={pizza.name}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            data-aos-duration="800"
                            className="group relative bg-white rounded-xl p-6 pt-[85px] flex flex-col items-center
      shadow hover:shadow-xl hover:-translate-y-2
      transition-all duration-500 ease-in-out will-change-transform"
                        >
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="w-[130px] pointer-events-none rounded-full object-cover
        transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <SubHeading
                                subText={`₹${pizza.price}`}
                                subClass='!text-custom-lg !font-semibold leading-140 !pb-[2px]'
                            />
                            <h3 className="font-semibold text-custom-base text-near-black mb-[2px]">
                                {pizza.name}
                            </h3>
                            <p className="text-dark mb-3 leading-160">{pizza.desc}</p>
                            <CustomButton btnText="Order Now" btnClass="!px-4 !py-3" />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default BestSellers

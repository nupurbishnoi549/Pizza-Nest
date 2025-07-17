import React from 'react';
import Heading from './common/Heading';
import { CARD_ITEMS } from '../utils/helper';
import pizzaImg from '../assets/images/webp/pizza-man-img.webp';
import sliceImg from '../assets/images/webp/slice-img.webp';
import SubHeading from './common/SubHeading';

const AboutUs = () => {
    return (
        <div id='menu' className='relative max-w-[1920px] mx-auto'>
            <div className="pt-[100px] pb-[49px]  px-5">
                <div className="absolute inset-0 bg-layer-section z-0" />
                <div className="relative z-10 max-w-[1114px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row !items-center lg:items-start gap-10 xl:gap-[133px] lg:gap-[47px]">
                        <div
                            className="flex flex-col items-center lg:items-start"
                            data-aos="fade"
                        >
                            <div className="flex items-center gap-[6px] pb-2">
                                <SubHeading subText="About Us" />
                                <div className="h-px w-[60px] bg-gradient-to-r from-[#EC6112] to-[#FF902E] opacity-100"></div>
                            </div>
                            <Heading headingText="Welcome to the Nest" headingClass="text-center lg:text-left" />
                            <ul className="
  text-dark-gray max-md:mb-4
  pl-5 mt-4 space-y-3 max-w-[545px] 
  text-center 
  list-none 
  lg:list-disc lg:text-left lg:marker:text-dark-gray
">
                                <li className="font-normal text-base">
                                    At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.
                                </li>
                                <li className="font-normal text-base">
                                    Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.
                                </li>
                            </ul>
                            <div className="flex flex-wrap justify-center lg:justify-start max-[598px]:gap-3 min-[598px]:gap-6">
                                {CARD_ITEMS.map((item, index) => {
                                    const Icon = item.icon;
                                    const paddingTopClass =
                                        index === 1 ? 'min-[574px]:mt-9 max-[574px]:mt-3' : 'min-[574px]:mt-6 max-[574px]:mt-3';

                                    return (
                                        <div
                                            key={index}
                                            className={`w-[170px] h-[122px] rounded-[12px] border border-dashed border-[#f67a21]/50 
              p-[14px] flex flex-col items-center justify-center text-center bg-white 
              shadow-orange-custom transition-all duration-300 ease-in-out 
              hover:shadow-md hover:-translate-y-1 ${paddingTopClass}`}
                                        >

                                            <div className="text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-[#EC6112] to-[#FF902E] mb-2">
                                                <Icon />
                                            </div>
                                            <p className="text-deep-gray font-semibold leading-120">
                                                {item.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className=""
                            data-aos="fade"
                        >
                            <img
                                src={pizzaImg}
                                alt="pizza"
                                className="w-full xl:max-w-[423px] max-sm:h-[400px] pointer-events-none max-w-[376px] mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 lg:bottom-[-23%] bottom-2">
                <img
                    src={sliceImg}
                    alt="sliceImg"
                    className="xl:w-[180px] sm:w-[120px] w-[100px] pointer-events-none animate-bounce [animation-duration:2.5s]"
                />
            </div>
        </div>

    );
};

export default AboutUs;

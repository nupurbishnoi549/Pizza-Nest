import React from 'react';
import deliveryImg from '../assets/images/webp/delivery-img.png';
import tickSvg from '../assets/images/svg/tick.svg';
import { FEATURES } from '../utils/helper';
import tomatoImg2 from '../assets/images/webp/tomato-img2.png';
import SubHeading from './common/SubHeading';


const FoodDelivery = () => {
    return (
        <div className='relative'>
            <div className="px-5 py-[100px] bg-[#FFF9F4] overflow-hidden">
                <div className="max-w-[1140px] mx-auto">
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-9'>
                        <div className="max-w-[520px] text-center lg:text-left mx-auto lg:mx-0">
                            <div className="flex items-center gap-[6px] pb-2">
                                <SubHeading subText="Food Delivery" />
                                <div className="h-px w-[60px] bg-gradient-to-r from-[#EC6112] to-[#FF902E] opacity-100"></div>
                            </div>

                            <h2 className="font-bold text-4xl md:text-5xl text-[#1E1E1E] leading-tight mb-4">
                                Fast, Fresh & Always On Time
                            </h2>

                            <p className="text-primary-gray font-normal text-base leading-160 mb-3 max-w-[540px]">
                                We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <ul className="text-primary-gray space-y-2 mb-6 text-left">
                                    {FEATURES.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-[6px] leading-160"
                                        >
                                            <img src={tickSvg} alt="tickSvg" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <button className="bg-[#FC8B44] text-white font-semibold rounded-md px-8 py-3 hover:bg-[#E86E1D] transition duration-200">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="max-w-[612px] w-full">
                            <img
                                src={deliveryImg}
                                alt="Delivery"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute z-10 left-[-2%] xl:left-0  bottom-[-24%]'>
                <img src={tomatoImg2} alt="tomatoImg" className='sm:w-[200px] w-[125px]' />
            </div>
        </div>
    );
};

export default FoodDelivery;

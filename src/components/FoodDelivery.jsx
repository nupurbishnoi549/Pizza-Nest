import React from 'react';
import deliveryImg from '../assets/images/webp/delivery-img.webp';
import tickSvg from '../assets/images/svg/tick.svg';
import { FEATURES } from '../utils/helper';
import tomatoImg2 from '../assets/images/webp/tomato-img2.webp';
import SubHeading from './common/SubHeading';
import CustomButton from './common/CustomButton';
import Heading from './common/Heading';
import Description from './common/Description';

const FoodDelivery = () => {
    return (
        <div className='relative max-w-[1920px] mx-auto'>
            <div className="absolute inset-0 bg-layer-section z-0" />
            <div className="px-5 md:py-[100px] py-16 relative z-10 overflow-hidden">
                <div className="max-w-[1140px] mx-auto">
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-9'>
                        <div
                            className="max-w-[520px] text-center lg:text-left mx-auto lg:mx-0"
                            data-aos="fade"
                            data-aos-duration="1000"
                        >
                            <div className="flex items-center max-sm:justify-center gap-[6px] pb-2">
                                <SubHeading subText="Food Delivery" />
                                <div className="h-px w-[60px] bg-gradient-to-r from-[#EC6112] to-[#FF902E] opacity-100"></div>
                            </div>
                            <Heading
                                headingText=' Fast, Fresh & Always On Time'
                                headingClass='!mb-4 !text-near-black'
                            />
                            <Description
                                descriptionText='We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away.'
                                descriptionClass='!text-charcoal-gray !mb-3 !max-w-[540px]'
                            />
                            <div className="flex justify-center lg:justify-start">
                                <ul className="text-charcoal-gray space-y-2 mb-6 text-left">
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
                                <CustomButton btnText="Order Now" btnClass='!py-[17px]' />
                            </div>
                        </div>
                        <div
                            className="max-w-[612px] w-full"
                            data-aos="fade"
                            data-aos-duration="1000"
                        >
                            <img
                                src={deliveryImg}
                                alt="Delivery"
                                className="w-full h-auto pointer-events-none"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute z-10 left-[-2%] xl:left-0 lg:bottom-[-32%] hidden md:block'>
                <img src={tomatoImg2} alt="tomatoImg" className='lg:w-[200px] w-[125px] pointer-events-none' />
            </div>
        </div>
    );
};

export default FoodDelivery;

import React from 'react';
import tastyImg from '../assets/images/webp/tasty-img.png';
import grassImg from '../assets/images/webp/grass-img.png';
import grassImg2 from '../assets/images/webp/grass-img2.png';


const LimitedOffer = () => {
    return (
        <div
            className="buy-one-bg bg-cover bg-no-repeat relative"
        >
            <div className="absolute top-0 right-0 hidden lg:block">
                <img src={grassImg2} alt="grassImg" className="w-[100px]" />
            </div>

            <div className='py-10 px-5 sm:px-10 md:px-[50px] xl:pl-[150px] lg:pl-[100px] lg:pr-18 xl:pr-[95px]'>
                <div className="max-w-[1194px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="text-center lg:text-left">
                            <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-prime-gradient leading-[140%]">
                                Buy 1 Pizza, Get 1 Free!
                            </h2>
                            <h2 className="text-white font-semibold text-[34px] sm:text-[42px] md:text-[50px] lg:text-5xl xl:text-[56px] pt-[2px] leading-[140%]">
                                Medium & Large pizzas
                            </h2>
                            <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-prime-gradient leading-[140%]">
                                Limited Offer
                            </h2>
                            <button className="bg-[#FC8B44] text-white rounded-md px-6 py-2 mt-4 font-semibold hover:bg-[#E86E1D] transition">
                                Order Now
                            </button>
                        </div>
                        <div className="w-full max-w-[595px]">
                            <img src={tastyImg} alt="tasty pizza" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 hidden lg:block'>
                <img src={grassImg} alt="grassImg" className='xl:w-[155px] lg:w-[100px]' />
          </div>
        </div>
    );
};

export default LimitedOffer;

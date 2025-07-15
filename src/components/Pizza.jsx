import React from 'react';
import { PROMO_ITEMS } from '../utils/helper';

const Pizza = () => {
    return (
        <div className="pb-[100px] px-[16px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6">
                    {PROMO_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-[50%] sm:max-w-[558px] min-[488px]:h-[319px] rounded-[12px] bg-cover bg-center relative flex flex-col justify-center items-start p-8 text-white"
                            style={{
                                backgroundImage: `url(${item.bgImg})`,
                            }}
                        >

                            <p className="text-[28px] font-normal text-prime-gradient leading-[160%]">{item.topText}</p>
                            <h3 className="sm:text-4xl text-2xl font-semibold leading-[160%]">{item.middleText}</h3>
                            <p className="text-xl font-normal leading-[160%]">{item.bottomText}</p>
                            <button className="mt-4 px-4 py-2 bg-[#EC6112] leading-[100%] text-white rounded hover:bg-[#FF902E] cursor-pointer transition-all duration-300">
                                {item.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pizza;

import React from 'react';
import { PROMO_ITEMS } from '../utils/helper';
import CustomButton from '../components/common/CustomButton';
import SubHeading from './common/SubHeading';

const Pizza = () => {
    return (
        <div id='menu' className="md:py-[100px] py-16 max-w-[1920px] mx-auto px-5">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6">
                    {PROMO_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-[50%] sm:max-w-[558px] min-[488px]:h-[319px] rounded-[12px] bg-cover bg-center relative flex flex-col justify-center items-start p-8 text-white"
                            data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
                            data-aos-duration="1000"
                            data-aos-delay={index * 100}
                            style={{
                                backgroundImage: `url(${item.bgImg})`,
                            }}
                        >
                            <SubHeading subText={item.topText} subClass='!text-custom-base !font-normal  !text-xl leading-160' />
                            <h3 className="sm:text-4xl text-2xl font-semibold leading-160 uppercase">{item.middleText}</h3>
                            <p className="text-xl font-normal leading-160">{item.bottomText}</p>
                            <CustomButton btnText={item.buttonText} btnClass="mt-4 !px-4 !py-[13px]" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Pizza;

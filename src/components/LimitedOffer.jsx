import React from 'react';
import tastyImg from '../assets/images/webp/tasty-img.webp';
import grassImg from '../assets/images/webp/grass-img.webp';
import grassImg2 from '../assets/images/webp/grass-img2.webp';
import SubHeading from '../components/common/SubHeading';
import CustomButton from './common/CustomButton';
import Heading from './common/Heading';

const LimitedOffer = () => {
    return (
        <div id='about' className="buy-one-bg bg-cover bg-no-repeat relative max-w-[1920px] mx-auto">
            <div
                className="absolute top-0 right-0 hidden lg:block"
                data-aos="fade-down"
                data-aos-delay="200"
            >
                <img src={grassImg2} alt="grassImg" className="w-[100px]" />
            </div>
            <div className='lg:pt-[17px] lg:pb-[33px] py-9 px-5 sm:px-10 md:px-[50px] xl:pl-[150px] lg:pl-[100px] lg:pr-18 xl:pr-[95px]'>
                <div className="max-w-[1194px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-11">
                        <div
                            className="text-center lg:text-left"
                            data-aos="fade"
                            data-aos-duration="1000"
                        >
                            <SubHeading
                                subText='Buy 1 Pizza, Get 1 Free!'
                                subClass='md:!text-custom-base !text-xl leading-140'
                            />
                            <Heading
                                headingText='Medium & Large pizzas'
                                headingClass='!text-white xl:!text-custom-4xl xl:!w-[597px] !pt-[2px] !leading-140'
                            />
                            <SubHeading
                                subText='Limited Offer'
                                subClass='md:!text-custom-base !text-xl leading-140'
                            />
                            <CustomButton btnText="Order Now" btnClass='!py-[17px] !mt-4' />
                        </div>
                        <div
                            data-aos="fade"
                            data-aos-duration="1000"
                        >
                            <img src={tastyImg} alt="tasty pizza" className="w-full object-contain max-w-[553px] xl:h-[350px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='absolute bottom-0 left-0 hidden lg:block'
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <img src={grassImg} alt="grassImg" className='xl:w-[155px] lg:w-[100px]' />
            </div>
        </div>

    );
};

export default LimitedOffer;

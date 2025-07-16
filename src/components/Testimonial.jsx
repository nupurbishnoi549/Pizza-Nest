import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LeftArrow, RightArrow, ComaIcon, ComaIcon2 } from "../utils/Icons";
import swiperPizza from '../assets/images/webp/swiper-pizza.png';
import { AVATAR, TESTIMONIALS , PIZZA_IMAGES} from "../utils/helper";
import SubHeading from "./common/SubHeading";
import Heading from "./common/Heading";

const Testimonial = () => {
    // Swiper ref and state for controlling active slide
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handler for avatars
    const handleAvatarClick = index => {
        swiperRef.current?.slideToLoop(index); // slideToLoop for looping swipers
    };

    // Handler for swiper navigation
    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return (
        <div className="relative px-5 py-25 bg-[#F8F8F880] bg-no-repeat bg-cover bg-center max-w-[1920px] mx-auto">
            <div className="absolute inset-0 bg-layer-section z-0" />
            <div className='max-w-[1140px] relative z-10 mx-auto'>
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <SubHeading subText="Testimonial" />
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>
                <Heading
                    headingClass='!mb-[60px] !max-w-[586px] !mx-auto'
                    headingText=' What Our Customers Say'
                />
                <div className="flex flex-col md:flex-row max-lg:justify-center max-lg:items-center relative gap-10">
                    <div className="relative w-full max-w-[523px] sm:ml-[37px] sm:pb-[76px] pb-10 ">
                        <img
                            src={PIZZA_IMAGES[activeIndex]}
                            alt="Pizza"
                            className="w-full rounded-xl object-cover sm:block hidden"
                        />
                        <div className="sm:absolute left-[-36px] top-[145px] flex sm:flex-col max-sm:w-full justify-center items-center size-[74px] gap-3">
                            {AVATAR.map((avatar, i) => (
                                <img
                                    key={i}
                                    src={avatar}
                                    alt={`avatar-${i}`}
                                    onClick={() => handleAvatarClick(i)}
                                    className={`cursor-pointer rounded-full transition-all duration-300 ${i === activeIndex ? 'sm:size-[74px] size-25' : 'sm:size-15 size-20'}`}
                                    style={{ border: i === activeIndex ? '2.5px solid #FF902E' : 'none' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    onSwiper={swiper => (swiperRef.current = swiper)}
                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                    className="lg:!absolute bottom-0 right-0 max-w-[680px] w-full"
                >
                    {TESTIMONIALS.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl p-6 w-full relative">
                                <div className="absolute left-0 top-0"><ComaIcon /></div>
                                <p className="text-[#545454] leading-160 mb-4 font-normal text-base max-w-[632px]">
                                    {item.text}
                                </p>
                                <div className="absolute right-[14%] bottom-[27%]"><ComaIcon2 /></div>
                                <h4 className="font-semibold text-2xl text-black mt-4 mb-0.5">{item.name}</h4>
                                <p className="text-base leading-[26px] mb-6">{item.role}</p>
                                <div className="flex items-center gap-1 mt-4">
                                    <button
                                        onClick={handlePrev}
                                        className="group hover:bg-gradient-orange bg-[#EEEEEE] !rounded-[4px] !px-[15px] !py-3.5 flex items-center justify-center transition"
                                    >
                                        <RightArrow />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="group hover:bg-gradient-orange bg-[#EEEEEE] !rounded-[4px] hover:text-white flex items-center justify-center !px-[15px] !py-3.5 transition"
                                    >
                                        <LeftArrow />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;

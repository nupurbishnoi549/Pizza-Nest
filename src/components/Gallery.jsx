import React from "react";
import { GALLERY_IMAGES } from "../utils/helper";
import sliceImg2 from '../assets/images/webp/slice2.webp';
import SubHeading from "./common/SubHeading";
import CustomButton from "./common/CustomButton";
import Heading from "./common/Heading";

const Gallery = () => {
    return (
        <div className="relative max-w-[1920px] mx-auto">
            <div className="absolute right-0 sm:top-0 top-[-1%] hidden md:block">
                <img
                    src={sliceImg2}
                    alt="sliceImg"
                    className="xl:w-[180px] sm:w-[140px] w-[100px] animate-bounce [animation-duration:2.5s] pointer-events-none"
                />
            </div>
            <div className="md:py-25 py-16 px-4 bg-white">
                <div className="max-w-[1140px] mx-auto w-full">
                    <div className="text-center mb-10">
                        <div className="flex items-center gap-[6px] justify-center pb-2">
                            <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                            <SubHeading subText="Our Gallery" />
                            <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                        </div>
                        <Heading headingClass='!max-w-[558px] !mx-auto' headingText='A Glimpse Into Our Pizza World' />
                    </div>
                    <div className="hidden xl:flex justify-between gap-6 mb-8">
                        <div className="flex flex-col gap-6 w-[267px]">
                            <img
                                src={GALLERY_IMAGES[0].img}
                                alt="gallery"
                                className="w-full max-w-[267px] h-[291px] object-cover rounded-xl gallery-hover"
                                data-aos="fade-up"
                            />
                            <img
                                src={GALLERY_IMAGES[3].img}
                                alt="gallery"
                                className="w-full max-w-[267px] h-[248px] object-cover rounded-xl gallery-hover"
                                data-aos="fade-right"
                            />
                        </div>
                        <div className="flex flex-col gap-6 w-[558px]">
                            <img
                                src={GALLERY_IMAGES[1].img}
                                alt="gallery"
                                className="w-full max-w-[558px] h-[329px] object-cover rounded-xl gallery-hover"
                                data-aos="zoom-in"
                            />
                            <div className="flex gap-6">
                                <img
                                    src={GALLERY_IMAGES[4].img}
                                    alt="gallery"
                                    className="max-w-[340px] w-full h-[210px] object-cover rounded-xl gallery-hover"
                                    data-aos="fade-up-right"
                                />
                                <img
                                    src={GALLERY_IMAGES[5].img}
                                    alt="gallery"
                                    className="max-w-[194px] w-full h-[210px] object-cover rounded-xl gallery-hover"
                                    data-aos="fade-up-left"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[267px]">
                            <img
                                src={GALLERY_IMAGES[2].img}
                                alt="gallery"
                                className="w-full h-[235px] object-cover rounded-xl gallery-hover"
                                data-aos="fade-left"
                            />
                            <img
                                src={GALLERY_IMAGES[6].img}
                                alt="gallery"
                                className="w-full h-[304px] object-cover rounded-xl gallery-hover"
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                    <div className="xl:hidden flex flex-col gap-6 mb-12 items-center max-w-[600px] mx-auto">
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[0, 3].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt="gallery"
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[240px] gallery-hover"
                                    data-aos="zoom-in-up"
                                />
                            ))}
                        </div>
                        <img
                            src={GALLERY_IMAGES[1].img}
                            alt="gallery"
                            className="rounded-xl object-cover w-full h-[280px] gallery-hover"
                            data-aos="fade-up"
                        />
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[4, 5].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt="gallery"
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[210px] gallery-hover"
                                    data-aos="fade-up"
                                />
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[2, 6].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt="gallery"
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[240px] gallery-hover"
                                    data-aos="fade-up"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <CustomButton btnText="View More" btnClass='!py-[17px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

import React from "react";
import { GALLERY_IMAGES } from "../utils/helper";
import sliceImg2 from '../assets/images/webp/slice2.png';
import SubHeading from "./common/SubHeading";


const Gallery = () => {
    return (
        <div className="relative">
            <div className="absolute right-0 sm:top-0 top-[-1%]">
                <img
                    src={sliceImg2}
                    alt="sliceImg"
                    className="xl:w-[180px] sm:w-[140px] w-[100px] animate-bounce [animation-duration:2.5s]"
                />
            </div>
            <div className="py-[100px] px-4 bg-white">
                <div className="max-w-[1140px] mx-auto w-full">
                    <div className="text-center mb-12">
                        <div className="flex items-center gap-[6px] justify-center pb-2">
                            <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                            <SubHeading subText="Our Gallery" />
                            <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#222] leading-tight">
                            A Glimpse Into Our Pizza <br />
                            World
                        </h2>
                    </div>
                    <div className="hidden xl:flex justify-between gap-6 mb-12">
                        <div className="flex flex-col gap-6 w-[267px]">
                            <img
                                src={GALLERY_IMAGES[0].img}
                                alt=""
                                className="w-full h-[291px] object-cover rounded-xl"
                            />
                            <img
                                src={GALLERY_IMAGES[3].img}
                                alt=""
                                className="w-full h-[248px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col gap-6 w-[558px]">
                            <img
                                src={GALLERY_IMAGES[1].img}
                                alt=""
                                className="w-full h-[329px] object-cover rounded-xl"
                            />
                            <div className="flex gap-6">
                                <img
                                    src={GALLERY_IMAGES[4].img}
                                    alt=""
                                    className="w-[340px] h-[210px] object-cover rounded-xl"
                                />
                                <img
                                    src={GALLERY_IMAGES[5].img}
                                    alt=""
                                    className="w-[194px] h-[210px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[267px]">
                            <img
                                src={GALLERY_IMAGES[2].img}
                                alt=""
                                className="w-full h-[235px] object-cover rounded-xl"
                            />
                            <img
                                src={GALLERY_IMAGES[6].img}
                                alt=""
                                className="w-full h-[304px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="xl:hidden flex flex-col gap-6 mb-12 items-center max-w-[600px] mx-auto">
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[0, 3].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt=""
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[240px]"
                                />
                            ))}
                        </div>
                        <img
                            src={GALLERY_IMAGES[1].img}
                            alt=""
                            className="rounded-xl object-cover w-full h-[280px]"
                        />
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[4, 5].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt=""
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[210px]"
                                />
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            {[2, 6].map((i) => (
                                <img
                                    key={i}
                                    src={GALLERY_IMAGES[i].img}
                                    alt=""
                                    className="rounded-xl object-cover w-full sm:w-[48%] h-[240px]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-[#FC8B44] hover:bg-[#E86E1D] text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

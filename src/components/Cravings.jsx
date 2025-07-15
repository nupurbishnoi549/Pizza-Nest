import React from 'react';
import { CRAVINGS_MENU } from '../utils/helper';

const Cravings = () => {
    return (
        <div className='px-5'>
            <div className='max-w-[1140px] mx-auto'>
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <p className="text-lg font-bold leading-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                        Our Menu
                    </p>
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>
                <h2 className="font-semibold text-5xl max-w-[440px] mx-auto text-center md:text-4xl text-black mt-2 leading-[120%]">Explore Flavours, Pick Your Cravings</h2>
                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {CRAVINGS_MENU.map((item, idx) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[364px] h-[216px] object-cover rounded-t-[8px]"
                            />
                            <div className="relative bg-white border border-[#00000014] rounded-[8px] w-[324px] h-[192px] flex flex-col items-center text-center p-5 -mt-2 shadow">
                                {/* Price Bar */}
                                <div className="flex gap-2 justify-center mb-2">
                                    {item.prices.map((p, i) => (
                                        <span
                                            key={p}
                                            className={`text-2xl font-semibold leading-[140%]  ${i === 0 ? "text-[#FF902E]" : "text-[#FC8B44]"}`}
                                        >
                                            {p}
                                            {i !== item.prices.length - 1 ? " /" : ""}
                                        </span>
                                    ))}
                                </div>
                                <div className="font-semibold text-2xl mb-[2px] leading-[140%] text-near-black">{item.title}</div>
                                <div className="text-dark  text-base leading-[160%] mb-1">{item.desc}</div>
                                {/* Stars */}
                                <div className="flex justify-center items-center gap-1 mt-auto">
                                    {Array(item.rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6196 1.17082C10.7393 0.802296 11.2607 0.802296 11.3804 1.17082L13.6044 8.0154C13.6579 8.18021 13.8115 8.2918 13.9848 8.2918H21.1816C21.5691 8.2918 21.7302 8.78764 21.4167 9.0154L15.5944 13.2456C15.4542 13.3474 15.3955 13.528 15.4491 13.6928L17.673 20.5374C17.7927 20.9059 17.3709 21.2124 17.0575 20.9846L11.2351 16.7544C11.0949 16.6526 10.9051 16.6526 10.7649 16.7544L4.94254 20.9846C4.62905 21.2124 4.20726 20.9059 4.327 20.5374L6.55094 13.6928C6.60449 13.528 6.54583 13.3474 6.40563 13.2456L0.583282 9.0154C0.269796 8.78764 0.430906 8.2918 0.818395 8.2918H8.01521C8.18851 8.2918 8.34209 8.18021 8.39564 8.0154L10.6196 1.17082Z" fill="#FFEF0D" />
                                            </svg>

                                        ))}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <button className="px-8 py-2 rounded-md text-lg text-white bg-gradient-to-r from-[#FC8B44] to-[#FF902E] font-semibold shadow hover:from-[#FF902E] hover:to-[#FC8B44] transition">
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cravings

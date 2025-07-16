import React, { useState } from 'react';
import { CRAVINGS_MENU, MENU_CATEGORIES } from '../utils/helper';
import sliceImg from '../assets/images/webp/slice-img.webp';
import SubHeading from './common/SubHeading';
import CustomButton from './common/CustomButton';
import Heading from './common/Heading';

const Cravings = () => {
    const [active, setActive] = useState(0);
    const selectedCategory = MENU_CATEGORIES[active].name;

    const titleMap = {
        "All": ["Farmhouse Magic", "Masala Paneer", "Solo Meal Combo"],
        "Veg Pizzas": ["Veggie Blast", "Paneer Supreme", "Veg Meal Deal"],
        "Non-Veg Pizzas": ["Chicken Fiesta", "Spicy Keema", "Meaty Combo"],
        "Combos & Drinks": ["Combo Delight", "Paneer Combo", "Meal & Drink"],
        "Sides & Dips": ["Cheesy Sticks", "Paneer Bites", "Mini Meal"]
    };

    const cardData = CRAVINGS_MENU.map((item, index) => ({
        ...item,
        title: titleMap[selectedCategory][index] || item.title,
    }));

    return (

        <div id='offers' className='relative max-w-[1920px] mx-auto'>
            <div
                className="absolute left-0 xl:top-[5%] lg:top-0 sm:top-2 top-[-2%] hidden md:block"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                <img
                    src={sliceImg}
                    alt="sliceImg"
                    className="xl:w-[195px] sm:w-[140px] pointer-events-none w-[100px] animate-bounce [animation-duration:2.5s]"
                />
            </div>

            <div className='px-5 md:py-[100px] py-16'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className="flex items-center gap-[6px] justify-center pb-2">
                        <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                        <SubHeading subText="Our Menu" />
                        <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    </div>
                    <Heading headingClass='!max-w-[490px] !mx-auto !text-center' headingText='Explore Flavours, Pick Your Cravings' />

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:mt-10 mt-6">
                        {MENU_CATEGORIES.map((tab, idx) => (
                            <button
                                key={tab.name}
                                onClick={() => setActive(idx)}
                                className={`sm:w-[170px] max-sm:w-[140px] py-2 rounded-xl font-semibold text-base border
                    ${active === idx
                                        ? "bg-gradient-to-r from-[#FC8B44] to-[#FF902E] text-white shadow border-transparent"
                                        : "bg-white text-light-gray border-[#C1C1C1] hover:bg-[#FFF3EA] hover:text-[#FC8B44] hover:border-[#FC8B44]"
                                    }
                    cursor-pointer transition duration-150 ease-in-out`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center md:[&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:justify-self-center lg:[&>*:nth-child(3)]:col-span-1 lg:[&>*:nth-child(3)]:justify-self-auto">
                        {cardData.map((item, idx) => (
                            <div
                                key={item.title + idx}
                                className="flex flex-col items-center w-full max-w-[364px]"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay={`${idx * 100}`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[292px] pointer-events-none object-cover rounded-t-[8px]"
                                />
                                <div className="relative bg-white border border-[#00000014] rounded-[8px] w-full max-w-[324px] h-[192px] flex flex-col items-center text-center p-5 -mt-9 shadow">
                                    <div className="flex gap-2 justify-center mb-2">
                                        {item.prices.map((p, i) => (
                                            <span
                                                key={p}
                                                className={`text-2xl font-semibold leading-140 ${i === 0 ? "text-[#FF902E]" : "text-[#FC8B44]"}`}
                                            >
                                                {p}
                                                {i !== item.prices.length - 1 ? " /" : ""}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="font-semibold text-xl mb-[2px] leading-140 text-black whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.title}
                                    </div>
                                    <div className="text-gray-500 text-base leading-160 mb-1">{item.desc}</div>
                                    <div className="flex justify-center items-center gap-1 mt-auto">
                                        {Array(item.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <svg
                                                    key={i}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.6196 1.17082C10.7393 0.802296 11.2607 0.802296 11.3804 1.17082L13.6044 8.0154C13.6579 8.18021 13.8115 8.2918 13.9848 8.2918H21.1816C21.5691 8.2918 21.7302 8.78764 21.4167 9.0154L15.5944 13.2456C15.4542 13.3474 15.3955 13.528 15.4491 13.6928L17.673 20.5374C17.7927 20.9059 17.3709 21.2124 17.0575 20.9846L11.2351 16.7544C11.0949 16.6526 10.9051 16.6526 10.7649 16.7544L4.94254 20.9846C4.62905 21.2124 4.20726 20.9059 4.327 20.5374L6.55094 13.6928C6.60449 13.528 6.54583 13.3474 6.40563 13.2456L0.583282 9.0154C0.269796 8.78764 0.430906 8.2918 0.818395 8.2918H8.01521C8.18851 8.2918 8.34209 8.18021 8.39564 8.0154L10.6196 1.17082Z"
                                                        fill="#FFEF0D"
                                                    />
                                                </svg>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <CustomButton btnText="View More" btnClass='!py-[17px]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cravings;

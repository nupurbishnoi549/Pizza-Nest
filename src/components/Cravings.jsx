import React, { useState } from 'react';
import { CRAVINGS_MENU, MENU_CATEGORIES } from '../utils/helper';

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
        <div className='px-5 py-[100px]'>
            <div className='max-w-[1140px] mx-auto'>
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <p className="text-lg font-bold leading-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#EC6112] to-[#FF902E]">
                        Our Menu
                    </p>
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>

                <h2 className="font-semibold md:text-5xl max-w-[490px] mx-auto text-center text-3xl text-black mt-2 leading-[120%]">
                    Explore Flavours, Pick Your Cravings
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                    {MENU_CATEGORIES.map((tab, idx) => (
                        <button
                            key={tab.name}
                            onClick={() => setActive(idx)}
                            className={`sm:w-[170px] max-sm:w-[140px] py-2 rounded-xl font-semibold text-base border
  ${active === idx
                                    ? "bg-gradient-to-r from-[#FC8B44] to-[#FF902E] text-white shadow border-transparent"
                                : "bg-white text-light-gray border-[#C1C1C1]"
                                }
  cursor-pointer transition duration-150`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 justify-items-center">
                    {cardData.map((item, idx) => (
                        <div key={item.title + idx} className="flex flex-col items-center w-full max-w-[364px]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[216px] object-cover rounded-t-[8px]"
                            />
                            <div className="relative bg-white border border-[#00000014] rounded-[8px] w-full max-w-[324px] h-[192px] flex flex-col items-center text-center p-5 -mt-2 shadow">
                                <div className="flex gap-2 justify-center mb-2">
                                    {item.prices.map((p, i) => (
                                        <span
                                            key={p}
                                            className={`text-2xl font-semibold leading-[140%] ${i === 0 ? "text-[#FF902E]" : "text-[#FC8B44]"}`}
                                        >
                                            {p}
                                            {i !== item.prices.length - 1 ? " /" : ""}
                                        </span>
                                    ))}
                                </div>
                                <div className="font-semibold text-xl mb-[2px] leading-[140%] text-black whitespace-nowrap overflow-hidden text-ellipsis">
                                    {item.title}
                                </div>
                                <div className="text-gray-500 text-base leading-[160%] mb-1">{item.desc}</div>
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
                    <button className="px-8 py-2 cursor-pointer rounded-md text-lg text-white bg-gradient-to-r from-[#FC8B44] to-[#FF902E] font-semibold shadow hover:from-[#FF902E] hover:to-[#FC8B44] transition">
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cravings;

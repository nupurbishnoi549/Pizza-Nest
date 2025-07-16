import React from 'react';
import { PIZZA_DATA } from '../utils/helper';
import tomatoImg from '../assets/images/webp/tomato-img.png';
import SubHeading from './common/SubHeading';

const BestSellers = () => {
    return (
        <div className=" py-[100px] relative px-5 bg-[#F8F8F880]">
            <div className="absolute inset-0 bg-layer-section z-0" />
            <div className='absolute z-10 right-[-2%] xl:right-0  xl:top-[-16%] sm:top-[-8%] top-[-5%]'>
                <img src={tomatoImg} alt="tomatoImg" className='sm:w-[200px] w-[125px]' />
            </div>
            <div className="max-w-[1140px] relative z-10  mx-auto text-center">
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <SubHeading subText="Best Sellers" />
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>

                <h2 className="font-bold text-3xl md:text-4xl text-near-black mb-4 leading-120">Pizzas You Can’t Say No To</h2>
                <p className="text-dark text-base font-normal leading-160">Tried, tested, and totally loved. These pizzas are always a crowd favorite.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 xl:grid-cols-4 gap-6 pt-[125px]">
                    {PIZZA_DATA.map((pizza, idx) => (
                        <div
                            key={pizza.name}
                            className="relative bg-white rounded-xl p-6 pt-[85px] flex flex-col items-center
             shadow transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="w-[130px] rounded-full object-cover"
                                />
                            </div>

                            <div className="text-prime-gradient text-custom-lg font-semibold leading-140 mb-[2px]">₹{pizza.price}</div>
                            <h3 className="font-semibold text-custom-base text-near-black mb-[2px]">{pizza.name}</h3>
                            <p className="text-near-black mb-3 leading-160">{pizza.desc}</p>
                            <button className="bg-[#FC8B44] text-white rounded-md px-4 py-2 font-semibold hover:bg-[#E86E1D] transition">
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSellers

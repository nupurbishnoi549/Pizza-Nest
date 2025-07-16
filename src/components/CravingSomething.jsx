import React from 'react'

const CravingSomething = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat craving-something-bg" >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center py-20 px-5">
                <div className="max-w-4xl text-center">
                    <h1 className="mb-4 text-white text-3xl md:text-5xl max-w-[722px] font-semibold leading-120">
                        Craving something cheesy, spicy, or just straight-up delicious?</h1>
                    <p className="mb-8 text-white/90 text-base max-w-[465px] mx-auto leading-160">
                        Your next favorite pizza is waiting. Freshly baked, flavor-packed,
                        and delivered hot to your door — every single time.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[140px]">
                            Order Now</button>
                        <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[140px] hover:bg-white/10">
                            View Full Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CravingSomething

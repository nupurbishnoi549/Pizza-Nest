import React from 'react';
import CustomButton from './common/CustomButton';
import Description from './common/Description';
import Heading from './common/Heading';

const CravingSomething = () => {
    return (
        <div className="relative w-full overflow-hidden max-w-[1920px] mx-auto">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat craving-something-bg" />
            <div className="relative z-10 flex items-center justify-center md:py-20 py-16 px-5">
                <div className="max-w-4xl text-center">
                    <Heading headingClass='!mb-4 !max-w-[722px] !text-white' headingText='Craving something cheesy, spicy, or just straight-up delicious?'/>
                    <Description descriptionText='Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.' descriptionClass='!max-w-[465px] !mx-auto !text-soft-gray !mb-8' />
                    <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                        <CustomButton btnText="Order Now" btnClass="max-sm:px-5 !py-[17px]" />
                        <CustomButton
                            btnText="View Full Menu"
                            btnClass="!bg-none !border-white border !backdrop-blur-[30.9px] !text-white !shadow-none max-sm:!px-5 "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CravingSomething
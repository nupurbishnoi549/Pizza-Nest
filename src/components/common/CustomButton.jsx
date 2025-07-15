import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
    return (
        <button
            type='button'
            className={`font-semibold py-4 px-8 bg-prime-gradient rounded-xl leading-[100%] text-off-white cursor-pointer ${btnClass}`}
        >
            {btnText}
        </button>
    );
};

export default CustomButton

import React from 'react';

const CustomButton = ({ btnClass = '', btnText, children }) => {
    return (
        <button
            type="button"
            className={`
        py-4 px-8 rounded-xl leading-120 font-semibold cursor-pointer text-white text-sm sm:text-base
        transition-transform duration-200 ease-in-out
        bg-[linear-gradient(to_right,#EC6112,#FF902E)]
        hover:bg-[linear-gradient(to_right,#f2711c,#fb8c00,#ff9800,#ffb74d)]
        hover:shadow-[0_8px_20px_#ff980066]
        hover:-translate-y-[1.5px]
        ${btnClass}
      `}
        >
            {btnText || children}
        </button>
    );
};

export default CustomButton;

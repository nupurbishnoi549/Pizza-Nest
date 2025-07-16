import React from 'react';

const CustomButton = ({ btnClass = '', btnText, children }) => {
    return (
        <button
            type="button"
            className={`
        py-3 px-6 rounded-lg font-semibold cursor-pointer text-white text-sm sm:text-base
        transition-all duration-500 ease-in-out bg-[linear-gradient(to_right,#EC6112,#FF902E)]
        hover:bg-[linear-gradient(to_right,#f2711c,#fb8c00,#ff9800,#ffb74d)] hover:shadow-[0_4px_15px_#ff980066] hover:scale-[1.04] hover:-translate-y-0.5
        ${btnClass}
      `}
        >
            {btnText || children}
        </button>
    );
};

export default CustomButton;

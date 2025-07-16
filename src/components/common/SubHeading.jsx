import React from 'react';

const SubHeading = ({ subClass = '', subText }) => {
    return (
        <p className={`text-lg leading-120 font-bold bg-gradient-to-r from-[#EC6112] to-[#FF902E] bg-clip-text text-transparent whitespace-nowrap ${subClass}`}>
            {subText}
        </p>
    );
};

export default SubHeading;

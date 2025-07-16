import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <h2 className={` font-semibold md:text-5xl text-custom-lg leading-120 max-sm:text-center ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading

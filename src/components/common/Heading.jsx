import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <h2 className={` font-semibold text-5xl leading-[120%] ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading

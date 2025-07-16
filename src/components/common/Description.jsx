import React from 'react'

const Description = ({ descriptionClass, descriptionText }) => {
    return (
        <p className={` leading-160 font-normal text-base ${descriptionClass}`}>{descriptionText}</p>
    )
}

export default Description

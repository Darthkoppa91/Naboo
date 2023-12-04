import React from 'react'

export const Card = ({img, name, rating}) => {
  return (
    <div>
        <img src={img.medium} alt="" />
        <p>{name}</p>
        <p className='rating'>{rating.average}</p>
    </div>
  )
}


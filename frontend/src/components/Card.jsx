
import React from 'react'

function Card({imgName}) {
  return (
    <div className='card-wrapper'>
      <img src={imgName}/>
      <img src={imgName}/>
      <img src={imgName}/>
      <img src={imgName}/>
      <img src={imgName}/>
    </div>
  )
}

export default Card

import React from 'react'
import '../styles/CenterCards.css'

function CenterCards({trumpCard}) {
  return (
    <div className='center-cards-wrapper'>
      <div className="trump-suit-wrapper">
        <img src={trumpCard.img} />
      </div>
      <div className="played-cards-wrapper">
        
      </div>
    </div>
  )
}

export default CenterCards

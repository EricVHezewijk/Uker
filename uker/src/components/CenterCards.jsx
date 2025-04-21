import React from 'react'
import '../styles/CenterCards.css'

function CenterCards({trumpCard}) {
  return (
    <div className='center-cards-wrapper'>
      <div className="played-cards-wrapper">
        
      </div>
      <div className="trump-suit-wrapper">
        <img src={trumpCard.img} alt={'/cardImages/back.png'}/>
      </div>
    </div>
  )
}

export default CenterCards

import React from 'react'
import '../styles/PlayerCards.css'

function PlayerCards({hand}) {
  return (
    <div className='player-cards-wrapper'>
      {hand && hand.map((card, index) => (
        <div className="card-wrapper" key={index}>
          <img src={card.img} alt={`${card.rank} of ${card.suit}`} />
        </div>
      ))}
    </div>
  )
}

export default PlayerCards

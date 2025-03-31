import Card from './Card'
import React from 'react'
import '../styles/CardHand.css'

function CardHand({player}) {
  return (
    <div className='card-hand'>
        
        {player.hand.map((card, index) => {
            return (
                <Card 
                    value={card.value} 
                    suit={card.suit} 
                    img={card.img} 
                    key={index}
                />
            )
        })}
    </div>
  )
}

export default CardHand

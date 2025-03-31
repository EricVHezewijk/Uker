import React from 'react'
import Card from './Card';
import { useState } from 'react';

function Player() {

const [cards, setCards] = useState([]);

  return (
    <div className='player-cards-wrapper'>
      {cards.map((card, index) => {
        return (
            <Card 
                value={card.value}
                suit={card.suit}
                img={img}
                key={index} 
            />)
      })}
    </div>
  )
}

export default Player

import React, { useEffect, useState } from 'react'
import Card from './Card'

function PlayedCards() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        
    }, [])

  return (
    <div className='played-cards-wrapper'>
        <Card imgName='/card_images/2_of_clubs.png' alt='2 of clubs' />
    </div>
  )
}

export default PlayedCards

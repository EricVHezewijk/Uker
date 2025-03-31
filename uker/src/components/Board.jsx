import React from 'react'
import '../styles/Board.css'
import { deal } from './Controller'

function Board({deck, setDeck, setPlayers}) {

    function handleClick() {
        deal(deck, setDeck, setPlayers)
    }

  return (
    <div className='board-wrapper'>
        <div className="board">
            <button onClick={handleClick}>Click ME</button>
        </div>
    </div>
  )
}

export default Board

import React, { useEffect } from 'react'
import '../styles/Board.css'
import CardHand from './CardHand'
import Controller from '../gameLogic/Controller'
import { useState } from 'react'

function Board() {

    const [controller, setController] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        const gameController = new Controller();
        setController(gameController);
    }, []);

    function handleStartGame() {
        if (controller) {
            controller.startGame();
            setGameStarted(true);
        }
    }

  return (
    <div className='board-wrapper'>
      <div className="board">
        <button onClick={handleStartGame}>Click</button>
        {gameStarted && controller && controller.players.length > 0 && (
            <CardHand player={controller.players[0]} />
        )}
      </div>
    </div>
  )
}

export default Board

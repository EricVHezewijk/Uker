
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card.js'
import Board from './Board.jsx';
import Player from './Player.js';

export function deal(deck, setDeck, setPlayers) {
    let newDeck = [...deck];

    setPlayers((prevPlayers) => {
        const updatedPlayers = prevPlayers.map((player) => {
            
            let updatedPlayer = { ...player, hand: [...player.hand] };

            for (let i = 0; i < 5; i++) {
                if (newDeck.length === 0) return updatedPlayer; 

                const randomIndex = Math.floor(Math.random() * newDeck.length);

                const [dealtCard] = newDeck.splice(randomIndex, 1);

                updatedPlayer.hand.push(dealtCard);
            }

            return updatedPlayer;
        });
        console.log(updatedPlayers[0].hand)
    });
    setDeck(newDeck);
}

function Controller() {

    const [deck, setDeck] = useState([]);
    const [players, setPlayers] = useState([new Player('Eric')])

    useEffect(() => {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

        const newDeck = []
        for (let suit of suits) {
            for (let value of values) {
                newDeck.push(new Card(value, suit, `/public/cardImages/${value}_of_${suit}.png`))
            }
        }
        setDeck(newDeck)
    },[])

  return (
    <div>
      <Board deck={deck} setDeck={setDeck} setPlayers={setPlayers}/>
    </div>
  )
}

export default Controller

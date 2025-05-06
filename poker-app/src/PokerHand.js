// src/PokerHand.js
import React from 'react';

function PokerHand({ cards }) {
    return (
        <div>
            <h2>Your Hand:</h2>
            <u1>
                {cards.map((card, index) => (
                    <li key={index}>card,</li>
                ))}
            </u1>
        </div>
    )
}

export default PokerHand;
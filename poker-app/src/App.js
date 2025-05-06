// src/App.js
import React from 'react'; 
import './App.css';
import PokerHand from './PokerHand';

function App() {
  // Example Hand Ace of spades (As), King of diamonds (Kd)
  const playerHand = ['As', 'Kd'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poker Trainer</h1>
      </header>
      <main>
        <PokerHand cards={playerHand} />
      </main>
    </div>
  );
}
 

export default App;


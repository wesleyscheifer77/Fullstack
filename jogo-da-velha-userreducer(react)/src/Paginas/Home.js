import React, { useEffect } from 'react';
import './Home.css';

import GameContextProvider from './src/contextos/GameContext';
import Board from './src/componentes/Board.js';

export default function Home() {
  useEffect(() => {
    document.title = 'Jogo da velha com React';
  }, []);

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
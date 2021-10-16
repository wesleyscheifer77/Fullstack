import React, { useContext } from 'react';

import { GameContext } from '../contextos/GameContext';

export default function Winner() {
  const {
    state: { whoIsWinner },
  } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner">{whoIsWinner} ganhou!!!</p>;
}
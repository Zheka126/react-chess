import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface Itimer {
  currentPlayer: Player | null;
  reset: () => void;
}

const Timer: FC<Itimer> = ({ currentPlayer, reset }) => {
  // make user to set time
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  function handleClick() {
    setBlackTime(300);
    setWhiteTime(300);
    reset();
  }

  return (
    <div>
      <h2>Black - {blackTime}</h2>
      <h2>Black - {whiteTime}</h2>
      <div>
        <button onClick={handleClick}>Reset game</button>
      </div>
    </div>
  );
};

export default Timer;

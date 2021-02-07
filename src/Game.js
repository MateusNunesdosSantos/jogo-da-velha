import React from 'react';
import getWinner from './functions/Winner';
import getInitialState from './functions/InitialState';

const getKeyFromIndex = (index) => {
  const row = Math.floor(index / 3);
  const col = index % 3;

  return `${row}-${col}`;
};

const getLabel = (value) => {
  if (!value) {
    return null;
  }
  return value > 0 ? 'O' : 'X';
};

const Game = () => {
  const [values, setValues] = React.useState(getInitialState);
  const [player, setPlayer] = React.useState(1);
  const [winner, setWinner] = React.useState(null);

  function handleClick(key) {
    if (winner || values[key]) {
      return;
    }
    const newValues = {
      ...values,
      [key]: player,
    };
    setValues(newValues);
    setPlayer(player * -1);
    const newWinner = getWinner(newValues);

    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1);
    }
  }
  function reset() {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
  }

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  return (
    <div className="Game">
      <div className="Game__board">
        {Array.from({ length: 9 }).map((_, index) => {
          const key = getKeyFromIndex(index);
          return (
            <button key={index} type="button" onClick={() => handleClick(key)}>
              {getLabel(values[key])}
            </button>
          );
        })}
      </div>
      {(winner || itsATie) && (
        <div className="Game__menu">
          {winner ? (
            <p>O Ganhador é: {winner > 0 ? 'O' : 'X'}</p>
          ) : (
            <p>Empate</p>
          )}
          <button onClick={reset}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default Game;

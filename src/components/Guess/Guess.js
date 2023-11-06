import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const classList = status ? `cell ${status}` : "cell";
  return <span className={classList}>{letter}</span>;
}

function Guess({ word, solution }) {
  const NUM_OF_LETTERS_PER_WORD = 5;
  const letterStates = checkGuess(word, solution);

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <Cell
          key={index}
          letter={letterStates ? letterStates[index].letter : undefined}
          status={letterStates ? letterStates[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

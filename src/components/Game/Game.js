import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const addGuess = (newGuess) => {
    setGuessList([...guessList, newGuess]);
  };

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;

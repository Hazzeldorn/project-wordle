import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running"); // running | won | lost

  const addGuess = (newGuess) => {
    const nextGuesses = [...guessList, newGuess];
    setGuessList(nextGuesses);

    if (newGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guessList={guessList} solution={answer} />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
      {gameStatus === "lost" && <LostBanner solution={answer} />}
      {gameStatus === "won" && <WonBanner numGuesses={guessList.length} />}
    </>
  );
}

export default Game;

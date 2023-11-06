import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
function getRandomWord() {
  const word = sample(WORDS);

  // To make debugging easier, we'll log the solution in the console.
  console.info(`Answer ${word}`);
  return word;
}

function Game() {
  const [answer, setAnswer] = React.useState(getRandomWord);
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

  const handleRestart = () => {
    console.log("Restarting the game...");
    setGuessList([]);
    setGameStatus("running");
    setAnswer(getRandomWord());
  };

  return (
    <>
      <GuessResults guessList={guessList} solution={answer} />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
      {gameStatus === "lost" && (
        <LostBanner solution={answer} handleRestart={handleRestart} />
      )}
      {gameStatus === "won" && (
        <WonBanner
          numGuesses={guessList.length}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;

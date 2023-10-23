import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  const NUM_OF_LETTERS_PER_WORD = 5;

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span key={index} className="cell">
          {word ? word.charAt(index) : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;

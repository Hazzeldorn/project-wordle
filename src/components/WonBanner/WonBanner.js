import React from "react";
import Banner from "../Banner";
import RestartButton from "../RestartButton";

function WonBanner({ numGuesses, handleRestart }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
        </strong>
        .
      </p>
      <RestartButton handleClick={handleRestart} />
    </Banner>
  );
}

export default WonBanner;

import React from "react";
import Banner from "../Banner";
import RestartButton from "../RestartButton";

function LostBanner({ solution, handleRestart }) {
  return (
    <Banner type="sad">
      <p>
        Sorry, the correct answer is <strong>{solution}</strong>.
      </p>
      <RestartButton handleClick={handleRestart} />
    </Banner>
  );
}

export default LostBanner;

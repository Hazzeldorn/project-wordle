import React from "react";

function RestartButton({ handleClick }) {
  return (
    <button className="button underline" onClick={handleClick}>
      Start a new game
    </button>
  );
}

export default RestartButton;

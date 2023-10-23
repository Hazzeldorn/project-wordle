import React from "react";

function GuessInput({ addGuess }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess(inputValue);
    setInputValue("");
  };

  const handleInput = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  );
}

export default GuessInput;

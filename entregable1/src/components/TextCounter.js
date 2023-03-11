import React, { useState } from "react";

function TextCounter() {
  const [counter, setCounter] = useState("");

  const AddToCounter = () => {
    setCounter(counter + "a");
  };

  const TakeFromCounter = () => {
    setCounter(counter.slice(0, counter.length - 1));
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={AddToCounter}>+</button>
      <button onClick={TakeFromCounter}>-</button>
    </>
  );
}

export default TextCounter;

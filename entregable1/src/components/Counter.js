import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const AddToCounter = () => {
    setCounter(counter + 1);
  };

  const TakeFromCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={AddToCounter}>+</button>
      <button onClick={TakeFromCounter}>-</button>
    </>
  );
}

export default Counter;

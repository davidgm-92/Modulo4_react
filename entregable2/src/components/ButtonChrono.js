import React, { useState, useEffect } from "react";

let started = false;

function ButtonChrono() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const timer = setInterval(AddSecond, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  function AddSecond() {
    setRunning(true);
    let newTime = time + 1;
    setTime(newTime);
    console.log(time);
  }

  function HandleClick() {
    console.log("pulsado");
    if (!running) {
      console.log("pulsado y started es falso");
      AddSecond();
    }
  }

  return (
    <>
      <p>{time} seconds passed</p>
      <button onClick={HandleClick}>activate</button>
    </>
  );
}

export default ButtonChrono;

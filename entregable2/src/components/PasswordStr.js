import React, { useState, useEffect } from "react";

function PasswordStr() {
  const [text, setText] = useState("");
  const [points, setPoints] = useState(0);

  const HandleChange = (newText) => {
    setText(newText.target.value);

    //textArray.map((letter) => console.log(letter));
  };

  useEffect(() => {
    let textArray = text.split("");
    console.log(textArray.length);
    setPoints(0);
    console.log("se inicializa points en " + points);
    if (textArray.length >= 8) {
      setPoints(points + 1);
    }
  }, [text]);

  return (
    <>
      <input value={text} onChange={HandleChange}></input>
      <p>
        Puntuación de contraseña: {points} {text}
      </p>
    </>
  );
}

export default PasswordStr;

import React, { useState } from "react";

function Textinput() {
  const [text, setText] = useState("");

  const handleChange = (newText) => {
    setText(newText.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange}></input>
      <h1>{text}</h1>
    </>
  );
}

export default Textinput;

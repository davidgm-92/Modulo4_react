import React, { useEffect, useState } from "react";

function TextCheck() {
  const [text, setText] = useState("");

  const HandleChange = (newText) => {
    setText(newText.target.value);
  };

  useEffect(() => {
    if (text == "A tope con React") {
      document.getElementById("errormsg").style.visibility = "hidden";
    } else {
      document.getElementById("errormsg").style.visibility = "visible";
    }
  }, [text]);

  return (
    <>
      <input type="text" value={text} onChange={HandleChange}></input>
      <p id="errormsg">Error!</p>
    </>
  );
}

export default TextCheck;

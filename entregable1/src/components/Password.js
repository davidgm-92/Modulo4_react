import React, { useState } from "react";

function PassShow() {
  const [pass, setPass] = useState("");
  const [passShown, setPassShown] = useState("password");

  function handleChange(event) {
    setPass(event.target.value);
  }

  function handlePassShown() {
    setPassShown("text");
  }

  return (
    <>
      <input
        id="passtext"
        type={passShown}
        value={pass}
        onChange={handleChange}
      ></input>
      <button onClick={handlePassShown}>Show pass</button>
    </>
  );
}

export default PassShow;

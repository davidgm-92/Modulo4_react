import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import ButtonChrono from "./components/ButtonChrono";
import Likes from "./components/Likes";
import Users from "./components/Users";

function App() {
  const [showUsers, setShowUsers] = useState(true);

  return (
    <>
      <ButtonChrono />
      <Likes />
      {showUsers && <Users />}
      <button onClick={() => setShowUsers(!showUsers)} id="removeButton">
        Remove users
      </button>
    </>
  );
}

export default App;

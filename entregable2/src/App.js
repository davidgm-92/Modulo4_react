import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import ButtonChrono from "./components/ButtonChrono";
import Likes from "./components/Likes";
import Users from "./components/Users";
import UsersList from "./components/UsersList";
import UsersAgeList from "./components/UsersAgeList";
import TextCheck from "./components/TextCheck";
import PasswordStr from "./components/PasswordStr";
import Formulario from "./components/Formulario";

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
      <UsersList />
      <UsersAgeList />
      <TextCheck />
      <PasswordStr />
      <Formulario />
    </>
  );
}

export default App;

import React from "react";

function UsersList() {
  const users = ["sergio", "victoria", "iván", "liviu"];

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;

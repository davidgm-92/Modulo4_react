import React from "react";

function UsersAgeList() {
  const users = [
    { name: "sergio", age: 28 },
    { name: "victoria", age: 27 },
    { name: "iván", age: 30 },
    { name: "liviu", age: 26 },
  ];

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.age}>{user.name + " " + user.age}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersAgeList;

import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState(["Juan", "Pepe"]);
  useEffect(() => {
    setUsers([...users, "Maria"]);
  }, []);

  useEffect(() => {
    return () => {
      console.log("Componente destruido");
    };
  }, []);

  return (
    <div>
      Users:
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

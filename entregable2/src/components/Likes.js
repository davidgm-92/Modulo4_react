import React, { useState } from "react";

let liked = false;

function Likes() {
  const [likes, setLikes] = useState(50);

  function HandleClick() {
    if (!liked) {
      liked = true;
      setLikes(likes + 1);
    }
  }

  return (
    <>
      <p>{likes} likes</p>
      <button onClick={HandleClick}>Give like</button>
    </>
  );
}

export default Likes;

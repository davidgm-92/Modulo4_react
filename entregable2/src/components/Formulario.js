import React from "react";

function Formulario() {
  function sConsole() {
    var form = document.getElementById("form1");
    var formData = new FormData(form);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  }

  return (
    <>
      <form action="" onSubmit={(document.preventDefault, sConsole)} id="form1">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name"></input>
        <br></br>
        <label htmlFor="fname">Firstname: </label>
        <input type="text" id="fname" name="fname"></input>
        <br></br>
        <label htmlFor="desc">Description: </label>
        <textarea id="desc" name="desc"></textarea>
        <br></br>
        <label htmlFor="gen">Gender: </label>
        <br></br>
        <input type="radio" name="gen" value="Male"></input>Male
        <br></br>
        <input type="radio" name="gen" value="Female"></input>Female
        <br></br>
        <label htmlFor="age">Age: </label>
        <input type="text" id="age" name="age"></input>
        <br></br>
        <label htmlFor="country">Country: </label>
        <br></br>
        <input type="radio" name="country" value="Male"></input>USA
        <br></br>
        <input type="radio" name="country" value="Female"></input>Spain
        <br></br>
        <label htmlFor="prov">Province: </label>
        <input type="text" id="prov" name="prov"></input>
        <br></br>
        <label htmlFor="hobs">Hobbies: </label>
        <br></br>
        <input type="checkbox" name="hobs-games" value="hobs"></input>Games
        <br></br>
        <input type="checkbox" name="hobs-football" value="hobs"></input>
        Football
        <br></br>
        <input type="checkbox" name="hobs-basketball" value="hobs"></input>
        Basketball
        <br></br>
        <input type="checkbox" name="hobs-art" value="hobs"></input>Art
        <br></br>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default Formulario;

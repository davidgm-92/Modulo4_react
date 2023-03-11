function ShowMessage({ msg }) {
  if (msg === false) {
    return;
  } else {
    return <p>Ahora puedes leer esto</p>;
  }
}

export default ShowMessage;

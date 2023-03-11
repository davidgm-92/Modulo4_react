import logo from "./logo.svg";
import "./App.css";
import "./components/Greetings.js";
import Greetings from "./components/Greetings.js";
import ShowName from "./components/ShowName";
import ShowDate from "./components/ShowDate";
import ShowMessage from "./components/ShowMessage";
import Loading from "./components/Loading";
import Button from "./components/Button";
import Textinput from "./components/UpdatedText";
import PassShow from "./components/Password";
import Counter from "./components/Counter";
import TextCounter from "./components/TextCounter";

function App() {
  const user = { name: "David" };
  const showMessage = true;
  const show = true;
  return (
    <>
      <Greetings />
      <ShowName name={user.name} />
      <ShowDate />
      <Loading show={show}>
        <ShowMessage msg={showMessage} />
      </Loading>
      <Button click={() => console.log("holi")} />
      <Textinput />
      <PassShow />
      <Counter />
      <TextCounter />
    </>
  );
}

export default App;

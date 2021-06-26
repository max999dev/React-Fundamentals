import "./App.css";
import Welcome from "./Welcome";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";

function App() {
  const message = "Hi Dude";
  const name = "Max";
  return (
    <div className="container">
      <Welcome name={name} />
      <SideBar name={name} />
      <ClassComponent message={message} />
      <Footer>About</Footer> 
      <Counter />
    </div>
  );
}

function SideBar(props) {
  return <h3>I am a sidebar with {props.name}</h3>;
}

function Footer(props) {
  return <h3>{props.children}</h3>;
}
export default App;

import Footer from "./Footer";
import Title from "./Title";
import "./Title.css";
import "./Logo.css";
import PlaceList from "./PlaceList";
function App() {
  return (
    <div className="container">
      <Title />
      <PlaceList />
      <Footer />
    </div>
  );
}

export default App;

//https://jsonplaceholder.typicode.com/todos

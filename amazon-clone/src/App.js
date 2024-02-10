import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM Naming Convention
    <div className="App">
      {/* <h1>Hello Revanth Mudiraj, Jai Shree Ram🚩</h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;

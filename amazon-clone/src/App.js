import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainPage = () => (
  <>
    <Header />
    <Home />
  </>
);
const CheckOut = () => (
  <>
    <h1>I AM A CHECKOUT, SMASH THE LIKE BUTTON </h1>
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

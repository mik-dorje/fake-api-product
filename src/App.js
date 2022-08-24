import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Products />

      <Footer />
    </div>
  );
}

export default App;

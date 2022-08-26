import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SwitchTab from "./components/SwitchTab";

function App() {
  return (
    <div className="App">
      <Products />
      <SwitchTab/>

      <Footer />
    </div>
  );
}

export default App;

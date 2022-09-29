import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { CardProvider } from "./CardContext";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </div>
  );
}

export default App;

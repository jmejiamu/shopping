import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCart from "./components/ProductCart/ProductCart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/details/:id" element={<ProductDetails />} />
        <Route exact={true} path="/cart" element={<ProductCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

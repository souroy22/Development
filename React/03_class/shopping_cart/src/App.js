import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products/views/Products";
import Cart from "./components/Cart/views/Cart";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar/views/NavbarComp";

const App = () => {
  const [data, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const saveInCart = (data) => {
    
  };

  const getProductsData = async () => {
    
  };

  useEffect(() => {
    if(data.length){
      return;
    }
    getProductsData();
  }, [cart]);

  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route
          path="/"
          exact
          element={<Products saveInCart={saveInCart} />}
        />
        <Route path="/cart" exact element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;

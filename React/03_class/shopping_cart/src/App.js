import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products/views/Products";
import Cart from "./components/Cart/views/Cart";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar/views/NavbarComp";
import WishList from "./components/wishlist/views/WishList";

const App = () => {

  return (
    <div className="App">
      <NavbarComp />

      <Routes>
        <Route
          path="/"
          exact
          element={<Products />}
        />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/wishlist" exact element={<WishList />} />
      </Routes>
    </div>
  );
};

export default App;

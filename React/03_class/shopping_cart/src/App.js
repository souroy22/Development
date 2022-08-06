import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products/views/Products";
import Cart from "./components/Cart/views/Cart";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/navbar/views/NavbarComp";
import WishList from "./components/wishlist/views/WishList";
import Sidebar from "./components/sidebar/views/Sidebar";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <NavbarComp />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {location.pathname === "/" && <Sidebar />}
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
    </div>
  );
};

export default App;

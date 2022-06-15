import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const RouterComp = ({ products, saveInCart, cart }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={<Products products={products} saveInCart={saveInCart} />}
        />
        <Route path="/cart" exact element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
};

export default RouterComp;

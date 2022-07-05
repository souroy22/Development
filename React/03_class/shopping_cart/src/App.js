import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Products from "./components/Products/views/Products";
import Cart from "./components/Cart/views/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const saveInCart = (data) => {
    const indx = cart.findIndex(product => product.id === data.id);
    if(indx >= 0){
      cart[indx].count += 1;
      setCart(cart);
      return;
    }
    data['count'] = 1;
    setCart([...cart, data]);
  };

  const getProductsData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    if(data.length){
      return;
    }
    getProductsData();
  }, [cart]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={<Products products={data} saveInCart={saveInCart} />}
        />
        <Route path="/cart" exact element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;

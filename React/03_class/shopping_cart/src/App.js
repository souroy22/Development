import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import RouterComp from "./RouterComp";

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
      <RouterComp products={data} saveInCart={saveInCart} cart={cart} />
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = ({ products, saveInCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/cart">Go to Cart</Link>
      {products.map((product) => (
        <Product key={product.id} product={product} saveInCart={saveInCart} />
      ))}
    </div>
  );
};

export default Products;

import React from "react";

const Product = ({ product, saveInCart, cartRoute }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "600px",
        border: "1px solid red",
        margin: "10px",
      }}
    >
      <img src={product.image} style={{ width: "300px", height: "150px" }} />
      <h2>Title: {product.title}</h2>
      <h4>Description: {product.description}</h4>
      <h4>Category: {product.category}</h4>
      <h4>Price: {product.price}</h4>
      {cartRoute && <button>{product.count}</button>}
      <button onClick={() => saveInCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;

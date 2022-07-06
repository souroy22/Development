import React from "react";
import Product from "../../Products/views/Product";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <div>
      {cartProducts.map((product) => (
        <Product key={product.id} product={product} cartRoute={true} />
      ))}
    </div>
  );
};

export default Cart;

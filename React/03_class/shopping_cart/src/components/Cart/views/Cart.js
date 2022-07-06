import React from "react";
import Product from "../../Products/views/Product";
import { useDispatch, useSelector } from "react-redux";
import '../styles/cart.css';

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <div className="cart-section">
      {cartProducts.map((product) => (
        <Product key={product.id} product={product} cartRoute={true} isCartPage={true} />
      ))}
    </div>
  );
};

export default Cart;

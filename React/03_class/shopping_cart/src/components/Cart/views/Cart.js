import React, {useEffect} from "react";
import Product from "../../Products/views/Product";
import { useSelector } from "react-redux";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cartProducts } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { products } =
    useSelector((state) => state.product);

  useEffect(() => {
    if(!products.length)
    navigate('/');
  }, []);

  if (!cartProducts.length) {
    return (<h3 style={{ color: "gray", marginTop: "300px" }}>
      Sorry! No product is added in the cart :(
    </h3>);
  }
  return (
    <div className="cart-section">
      {cartProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          cartRoute={true}
          isCartPage={true}
        />
      ))}
    </div>
  );
};

export default Cart;

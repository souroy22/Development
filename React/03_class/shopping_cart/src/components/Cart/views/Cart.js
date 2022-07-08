import React, { useEffect, useState } from "react";
import Product from "../../Products/views/Product";
import { useSelector } from "react-redux";
import "../styles/cart.css";
import { Link, useNavigate } from "react-router-dom";
import Buynow from "../../buynow/views/Buynow";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if (!products.length) navigate("/");
  }, [reload]);

  if (!cartProducts.length) {
    return (
      <>
        <h3 style={{ color: "gray", marginTop: "300px" }}>
          No product is added in the cart :(
        </h3>

        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="contained" size="large" color="primary">
            Continue shopping
          </Button>
        </Link>
      </>
    );
  }
  return (
    <div className="cart-section">
      <div className="cart-products">
        {cartProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            cartRoute={true}
            isCartPage={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
      <hr />
      <Buynow reload={reload} />
    </div>
  );
};

export default Cart;

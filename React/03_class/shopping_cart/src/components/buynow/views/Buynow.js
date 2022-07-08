import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/buynow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Buynow = ({ reload }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    calculatePrice();
  }, [totalPrice, cartProducts, reload]);

  const calculatePrice = () => {
    let totalPrice = cartProducts.reduce((initialValue, product) => {
      return (
        Math.round(product.price) * Math.round(product.count) + initialValue
      );
    }, 0);
    setTotalPrice(totalPrice);
    console.log("totalPrice", totalPrice);
  };
  return (
    <div className="buynow-section">
      <div className="price-section">
        <span>Total Price: </span>
        <div>
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faIndianRupeeSign}
          />
          {totalPrice}
        </div>
      </div>
      <div className="price-section">
        <span>Shipping charge: </span>
        <div>
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faIndianRupeeSign}
          />
          {totalPrice > 500 ? 0 : 50}
        </div>
      </div>
      <hr class="solid-line" />
      <div className="price-section">
        <span>Final Price: </span>
        <div>
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faIndianRupeeSign}
          />
          {totalPrice < 500 ? totalPrice + 50 : totalPrice}
        </div>
      </div>
      <Button
        variant="contained"
        color="success"
        size="large"
        style={{ backgroundColor: "#EDC126", marginTop: "20px" }}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default Buynow;

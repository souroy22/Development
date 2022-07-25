import React, { useEffect } from "react";
import Product from "../../Products/views/Product";
import { useDispatch, useSelector } from "react-redux";
import "../styles/wishlist.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const WishList = () => {
  const { products, wishlistProductsCount } = useSelector((state) => state.product);

  const navigate = useNavigate();

  useEffect(() => {
    if (!products.length) navigate("/");
  }, []);

  if (wishlistProductsCount == 0) {
    return (
      <>
        <h3 style={{ color: "gray", marginTop: "300px" }}>
          No product is added in the wishlist :(
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
    <div className="wishlist-section">
      {products.map((product) => {
        if (product.isWishListed) {
          return (
            <Product
              key={product.id}
              product={product}
              cartRoute={true}
              isCartPage={true}
            />
          );
        }
      })}
    </div>
  );
};

export default WishList;

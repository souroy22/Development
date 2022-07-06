import React from "react";
import Product from "../../Products/views/Product";
import { useDispatch, useSelector } from "react-redux";
import "../styles/wishlist.css";

const WishList = () => {
  const { products } = useSelector((state) => state.product);
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

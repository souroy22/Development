import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../action-creator";
import Product from "./Product";
import "../styles/products.css";
import CardSkeleton from "../../utility/common/Skeleton";

const Products = ({ saveInCart }) => {
  const dispatch = useDispatch();

  const { products, shouldShowFilteredProducts, filteredProducts } =
    useSelector((state) => state.product);

  useEffect(() => {
    if (!products.length) {
      dispatch(setProducts());
    }
  }, []);

  if (shouldShowFilteredProducts && !filteredProducts.length) {
    return(
      <h3 style={{ color: "gray", marginTop: "300px" }}>
        Sorry! No product found :(
      </h3>
    );
  }

  return (
    <>
      <Link to="/cart">Go to Cart</Link>
      {!products || !products.length ? (
        <div className="product-section">
          {Array.from(new Array(20)).map((val, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="product-section">
          {shouldShowFilteredProducts
            ? filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  saveInCart={saveInCart}
                />
              ))
            : products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  saveInCart={saveInCart}
                />
              ))}
        </div>
      )}
    </>
  );
};

export default Products;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../action-creator";
import Product from "./Product";
import "../styles/products.css";
import CardSkeleton from "../../utility/common/Skeleton";

const Products = ({ saveInCart }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if(!products.length){
      dispatch(setProducts());
    }
  }, []);

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
          {products.map((product) => (
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

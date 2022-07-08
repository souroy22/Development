import React, { useState } from "react";
import {
  addToCart,
  decreaseCounter,
  increaseCounter,
} from "../../Cart/action-creator";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { addToWishList, removeFromWishList } from "../action-creator";
import { useLocation } from "react-router-dom";

const Product = ({ product, saveInCart, isCartPage }) => {
  const [isAdded, setIsAdded] = useState(false);

  const location = useLocation();

  const { cartProducts } = useSelector((state) => state.cart);

  const addOrRemove = () => {
    if (!product.isWishListed) {
      dispatch(addToWishList(product.id));
    } else {
      dispatch(removeFromWishList(product.id));
    }
    setIsAdded(!isAdded);
  };

  const dispatch = useDispatch();

  const isAddedInCart = (id) => {
    const indx = cartProducts.findIndex((prod) => prod.id === id);
    return indx >= 0;
  };

  return (
    <Card sx={{ width: 365, margin: "10px", height: "400px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        style={{ objectFit: "scale-down" }}
      />
      <CardContent style={{ height: "190px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title.length > 30
            ? product.title.slice(0, 30) + " ..."
            : product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 150
            ? product.description.slice(0, 100) + " ..."
            : product.description}
        </Typography>
        <Typography variant="h5" color="text.secondary" style={{ marginTop: "5px" }}>
          Price:
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faIndianRupeeSign}
          />
          {Math.round(product.price)}
        </Typography>
      </CardContent>
      {!isCartPage && (
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-around",
            bottom: "20px",
          }}
        >
          <Button
            onClick={addOrRemove}
            variant="contained"
            size="large"
            style={{
              backgroundColor: product.isWishListed ? "#5A20CB" : "#DE4839",
            }}
          >
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faHeart} />
            {product.isWishListed ? "wishlisted" : "wishlist"}
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: isAddedInCart(product.id)
                ? "#758283"
                : "#3DBE29",
            }}
            size="large"
            onClick={() => dispatch(addToCart(product))}
          >
            {isAddedInCart(product.id) ? "Added to cart" : "Add to cart"}
          </Button>
        </CardActions>
      )}
      {location.pathname === "/wishlist" && (
        <>
          <Button
            variant="contained"
            color="success"
            size="large"
            style={{ backgroundColor: "#E21717" }}
            onClick={() => dispatch(removeFromWishList(product.id))}
          >
            Remove from wishlist
          </Button>
        </>
      )}
      {location.pathname === "/cart" && (
        <>
          <Button
            variant="contained"
            color="success"
            size="large"
            style={{
              backgroundColor: "#E21717",
              fontSize: "24px",
              fontWeight: "bolder",
            }}
            onClick={() => dispatch(decreaseCounter(product.id))}
          >
            -
          </Button>
          <span className="cart-counter">{product.count}</span>
          <Button
            variant="contained"
            color="success"
            size="large"
            style={{
              backgroundColor: "#66AD47",
              fontSize: "24px",
              fontWeight: "bolder",
            }}
            onClick={() => dispatch(increaseCounter(product.id))}
          >
            +
          </Button>
        </>
      )}
    </Card>
  );
};

export default Product;

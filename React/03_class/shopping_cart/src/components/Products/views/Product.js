import React, { useState } from "react";
import { addToCart } from "../../Cart/action-creator";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToWishList, removeFromWishList } from "../action-creator";
import { useLocation } from "react-router-dom";

const Product = ({ product, saveInCart, isCartPage }) => {
  const [isAdded, setIsAdded] = useState(false);

  const location = useLocation();

  const addOrRemove = () => {
    if (!product.isWishListed) {
      dispatch(addToWishList(product.id));
    } else {
      dispatch(removeFromWishList(product.id));
    }
    setIsAdded(!isAdded);
  };

  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 345, margin: "10px", height: "370px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        style={{ objectFit: "scale-down" }}
      />
      <CardContent style={{ height: "160px" }}>
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
            style={{ backgroundColor: "#DE4839" }}
          >
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faHeart} />
            {product.isWishListed ? "wishlisted" : "wishlist"}
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
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
    </Card>
  );
};

export default Product;

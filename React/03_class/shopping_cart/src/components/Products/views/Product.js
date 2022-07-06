import React from "react";
import { addToCart } from "../../Cart/action-creator";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = ({ product, saveInCart, cartRoute, isCartPage }) => {
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
      <CardContent>
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
      <CardActions style={{display: 'flex', justifyContent: 'space-around', bottom: '20px'}}>
        <Button variant="contained" size="large">
          wishlist
        </Button>
        <Button variant="contained" color="success" size="large" onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

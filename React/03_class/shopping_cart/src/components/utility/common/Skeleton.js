import React from "react";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const CardSkeleton = () => {
  return (
    <Card sx={{ width: 345, margin: "10px", height: "370px" }}>
      <CardContent style={{margin: 0}}>
          <Skeleton variant="rectangular" height={140} />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton height={30} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton height={60} />
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Skeleton height={55} width={150} />
        <Skeleton height={55} width={150} />
      </CardActions>
    </Card>
  );
};

export default CardSkeleton;

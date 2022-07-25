import React, { useState } from "react";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilter,
  handleCategoriesSelection,
  handleStarRating,
  selectRange,
} from "../../Products/action-creator";

const categoryOptions = [
  { lable: "Men's Clothing", name: "men's clothing" },
  { lable: "Jewelery", name: "jewelery" },
  { lable: "Electronics", name: "electronics" },
  { lable: "Women's Clothing", name: "women's Clothing" },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const { priceRange, filterStarRating } = useSelector(
    (state) => state.product
  );

  const handleChange = (event, newValue) => {
    dispatch(selectRange(newValue));
  };

  const valuetext = (value) => {
    return `₹ ${value}`;
  };

  const handleCategorySelection = (event, name) => {
    dispatch(handleCategoriesSelection(event.target.checked, name));
  };

  const handleRatingColor = (i) => {
    return filterStarRating > 0 && parseInt(filterStarRating) >= i + 1;
  };

  return (
    <div className="sidebar-section">
      <div className="filters-header">
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faFilter} />
        FILTERS
      </div>
      <div className="filter-option">
        <h4>Categories</h4>
        {categoryOptions.map((category, index) => (
          <div key={index} className="category-option">
            {category.lable}
            <input
              className="checkbox-input"
              type="checkbox"
              onChange={(event) =>
                handleCategorySelection(event, category.name)
              }
            />
          </div>
        ))}
      </div>
      <div className="filter-option">
        <h4>Price Range</h4>
        <Box sx={{ width: 350, padding: "10px 30px" }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="secondary"
            max={1000}
            step={100}
            marks
          />
        </Box>
      </div>
      <div className="filter-option">
        <h4>Star Rating</h4>
        <div className="stars-ratings">
          {[...Array(5)].map((el, i) => (
            <div
              key={i}
              className="star-rate"
              onClick={() => dispatch(handleStarRating(i + 1))}
              style={{
                backgroundColor: handleRatingColor(i) ? "#000" : "",
                color: handleRatingColor(i) ? "#fff" : "",
              }}
            >
              <FontAwesomeIcon style={{ color: "#F4BE2C" }} icon={faStar} />{" "}
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => dispatch(applyFilter())}
        style={{
          marginTop: "50px",
          color: "white",
          backgroundColor: "#1FAA59",
        }}
        variant="contained"
        size="large"
      >
        Apply FILTER
      </Button>
    </div>
  );
};

export default Sidebar;

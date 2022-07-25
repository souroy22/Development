import axios from "axios";

export const setProducts = () => async (dispatch) => {
  try {
    // fetching products from API
    const response = await axios.get("https://fakestoreapi.com/products");
    let data = [];
    if (response.data) {
      for (let prod of response.data) {
        prod["isWishListed"] = false;
        data.push(prod);
      }
    }
    dispatch({
      type: "SET_PRODUCTS",
      payload: data || [],
    });
  } catch (error) {
    console.log(`Error while getting products list: ${error.message}`);
  }
};

export const sortProducts = (option) => async (dispatch) => {
  try {
    if(option === '0'){
      dispatch({
        type: 'SORT_BY_INCREASING_ORDER'
      });
    }else if(option === '1'){
      dispatch({
        type: 'SORT_BY_DECREASING_ORDER'
      });
    }else if(option === '2'){
      dispatch({
        type: 'SORT_BY_RATING_HIGH'
      });
    }else if(option === '3'){
      dispatch({
        type: 'SORT_BY_RATING_LOW'
      });
    }
  } catch (error) {
    console.log(`Error while sorting products list: ${error.message}`);
  }
}

export const addToWishList = (id) => (dispatch) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    id,
  });
};

export const removeFromWishList = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_WISHLIST",
    id,
  });
};

export const filterData = (value) => (dispatch) => {
     if(!value.length){
          return;
     }
     dispatch({
          type: 'SET_FILTERED_DATA',
          payload: value
     })
}

export const shouldShowFilteredProd = (show) => (dispatch) => {
  dispatch({
    type: 'SHOULD_SHOW_FILTERED_PRODUCTS',
    payload: show
  })
}

export const handleCategoriesSelection = (isChecked, categoryName) => (dispatch) => {
  try {
    if(isChecked){
      dispatch({
        type: 'ADD_CATEGORY',
        name: categoryName
      });
    }else{
      dispatch({
        type: 'REMOVE_CATEGORY',
        name: categoryName
      });
    }
  } catch (error) {
    console.log(`Error while filtering category products list: ${error.message}`);
  }
} 

export const applyFilter = () => (dispatch) => {
  dispatch({
    type: 'APPLY_FILTER'
  });
}

export const selectRange = (range) => (dispatch) => {
  dispatch({
    type: 'SELECT_RANGE',
    range
  });
}

export const handleStarRating = (rating) => (dispatch) => {
  dispatch({
    type: 'SELECT_STAR',
    rating
  });
}
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

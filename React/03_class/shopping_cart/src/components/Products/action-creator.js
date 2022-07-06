import axios from "axios";

export const setProducts = () => async (dispatch) => {
     try {
          // fetching products from API
          const response = await axios.get("https://fakestoreapi.com/products");
          dispatch({
               type: 'SET_PRODUCTS',
               payload: response.data || []
          });
     } catch (error) {
          console.log(`Error while getting products list: ${error.message}`);
     }
}
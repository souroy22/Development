import axios from 'axios';


export const getProducts = (page=1, limit=10) => async (dispatch) => {
     try {
          const response = await axios.get(`https://fakestoreapi.com/products`, {params: {limit}});
          console.log(response.data);
          dispatch({
               type: 'GET_PRODUCTS',
               data: response.data,
               page,
               totalPage: 5
          });
     } catch (error) {
          console.log(`Error while fetching data, ${error.messsage}`);
     }
}
export const addToCart = (product) => (dispatch) => {
     try {
          dispatch({
               type: 'ADD_OR_REMOVE_FROM_CART',
               payload: product
          })
     } catch (error) {
          console.log(`Error while adding product to the cart: ${error.message}`);
     }
}
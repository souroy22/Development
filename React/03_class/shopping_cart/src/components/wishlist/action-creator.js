
export const addToWishList = (id) => (dispatch) => {
     dispatch({
          type: 'ADD_TO_WISHLIST',
          id
     })
}

export const removeFromWishList = (id) => (dispatch) => {
     dispatch({
          type: 'REMOVE_FROM_WISHLIST',
          id
     })
} 
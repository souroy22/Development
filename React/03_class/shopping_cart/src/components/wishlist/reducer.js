const initialState = {
     wishlistProducts: []
}

export const wishlist = (state=initialState, action) => {
     switch(action.type) {
          case 'ADD_TO_WISHLIST':
               const indx = state.wishlistProducts.findIndex(data => data.id === action.id);
               if(indx >= 0){
                    state.wishlistProducts[indx].isWishListed = true;
                    return {...state, wishlistProducts: state.wishlistProducts};
               }

          case 'REMOVE_FROM_WISHLIST':
               const index = state.wishlistProducts.findIndex(data => data.id === action.id);
               if(index >= 0){
                    state.wishlistProducts[index].isWishListed = false;
                    return {...state, wishlistProducts: state.wishlistProducts};
               }

          default:
               return state;
     }
}
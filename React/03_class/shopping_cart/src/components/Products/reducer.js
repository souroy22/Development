const initialState = {
  products: [],
};

export const product = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_WISHLIST":
      const indx = state.products.findIndex((data) => data.id === action.id);
      if (indx >= 0) {
        state.products[indx].isWishListed = true;
        return { ...state, products: state.products };
      }

    case "REMOVE_FROM_WISHLIST":
      const index = state.products.findIndex((data) => data.id === action.id);
      if (index >= 0) {
        state.products[index].isWishListed = false;
        return { ...state, products: state.products };
      }

     case 'SET_FILTERED_DATA':
          state.products = state.products.filter(product => {
               if(product.title.toLowerCase().includes(action.payload.toLowerCase())){
                    return product;
               }
               else if(product.description.toLowerCase().includes(action.payload.toLowerCase())){
                    return product;
               }
          });
          return {...state, products: state.products};

    default:
      return state;
  }
};

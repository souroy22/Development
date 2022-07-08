const initialState = {
  products: [],
  filteredProducts: [],
  shouldShowFilteredProducts: false,
  wishlistProductsCount: 0
};

export const product = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload, wishlistProductsCount: 0 };

    case "ADD_TO_WISHLIST":
      const indx = state.products.findIndex((data) => data.id === action.id);
      if (indx >= 0) {
        state.products[indx].isWishListed = true;
        return { ...state, products: state.products, wishlistProductsCount: state.wishlistProductsCount + 1 };
      }

    case "REMOVE_FROM_WISHLIST":
      const index = state.products.findIndex((data) => data.id === action.id);
      if (index >= 0) {
        state.products[index].isWishListed = false;
        return { ...state, products: state.products, wishlistProductsCount: (state.wishlistProductsCount < 0) ? 0 : state.wishlistProductsCount - 1 };
      }
      break;

    case "SHOULD_SHOW_FILTERED_PRODUCTS":
      return {...state, shouldShowFilteredProducts: action.payload};
    

     case 'SET_FILTERED_DATA':
          const filteredProds = state.products.filter(product => {
               if(product.title.toLowerCase().includes(action.payload.toLowerCase())){
                    return product;
               }
               else if(product.description.toLowerCase().includes(action.payload.toLowerCase())){
                    return product;
               }
          });
          return {...state, filteredProducts: filteredProds};

    default:
      return state;
  }
};

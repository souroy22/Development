const initialState = {
  products: [],
  filteredProducts: [],
  shouldShowFilteredProducts: false,
  wishlistProductsCount: 0,
  selectedCategories: [],
  priceRange: [100, 700],
  filterStarRating: 0
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

    case "SORT_BY_INCREASING_ORDER":
      if(state.shouldShowFilteredProducts){
        state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        return {...state, filteredProducts: state.filteredProducts };
      }
      state.products = state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      return {...state, products: state.products };

    case "SORT_BY_DECREASING_ORDER":
      if(state.shouldShowFilteredProducts){
        state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        return {...state, filteredProducts: state.filteredProducts };
      }
      state.products = state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      return {...state, products: state.products };

    case "SORT_BY_RATING_HIGH":
      if(state.shouldShowFilteredProducts){
        state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(a.rating.rate) - parseFloat(b.rating.rate));
        return {...state, filteredProducts: state.filteredProducts };
      }
      state.products = state.products.sort((a, b) => parseFloat(a.rating.rate) - parseFloat(b.rating.rate));
      return {...state, products: state.products };

    case "SORT_BY_RATING_LOW":
      if(state.shouldShowFilteredProducts){
        state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate));
        return {...state, filteredProducts: state.filteredProducts };
      }
      state.products = state.products.sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate));
      return {...state, products: state.products };

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

      case 'ADD_CATEGORY':
        return {...state, selectedCategories: [...state.selectedCategories, action.name]};

      case 'REMOVE_CATEGORY':
        state.selectedCategories = state.selectedCategories.filter(category => category !== action.name);
        return {...state, selectedCategories: state.selectedCategories};

      case 'SELECT_RANGE':
        return {...state, priceRange: action.range};

      case 'SELECT_STAR':
        return {...state, filterStarRating: action.rating};

      case 'APPLY_FILTER':
        // filter by category
        let newFilteredProduct = [];
        if(state.selectedCategories.length){
          newFilteredProduct = state.products.filter(product => state.selectedCategories.includes(product.category));
        }

        // filter by price range
        if(state.selectedCategories.length){
          newFilteredProduct = newFilteredProduct.filter(product => parseInt(product.price) >= state.priceRange[0] && parseInt(product.price) <= state.priceRange[1]);
        }else{
          newFilteredProduct = state.products.filter(product => parseInt(product.price) >= state.priceRange[0] && parseInt(product.price) <= state.priceRange[1]);
        }

        // filter by star rating
        if(state.filterStarRating){
          newFilteredProduct = newFilteredProduct.filter(product => parseFloat(product.rating.rate) >= parseInt(state.filterStarRating) && parseFloat(product.rating.rate) < parseInt(state.filterStarRating)+1);
        }

        return {...state, filteredProducts: newFilteredProduct, shouldShowFilteredProducts: true};


    default:
      return state;
  }
};

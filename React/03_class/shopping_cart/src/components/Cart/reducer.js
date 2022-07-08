const initialState = {
     cartProducts: []
}

export const cart = (state=initialState, action) => {
     switch (action.type) {
          case 'ADD_OR_REMOVE_FROM_CART':
               const data = action.payload;
               const cartData = state.cartProducts;
               const indx = cartData.findIndex(product => product.id === data.id);
               if(indx >= 0){
                    cartData[indx].count += 1;
                    return {...state, cartProducts: cartData};
               }
               data['count'] = 1;
               return {...state, cartProducts: [...state.cartProducts, data]};

          case 'INCREASE_COUNT':
               const index = state.cartProducts.findIndex(product => product.id === action.id);
               if(index >= 0){
                    state.cartProducts[index].count += 1;
                    return {...state, cartProducts: state.cartProducts};
               }
          case 'DECREASE_COUNT':
               const indexx = state.cartProducts.findIndex(product => product.id === action.id);
               if(indexx >= 0 && state.cartProducts[indexx].count === 1){
                    state.cartProducts = state.cartProducts.filter(product => product.id !== action.id);
               }
               else if(indexx >= 0){
                    state.cartProducts[indexx].count -= 1;
               }
               return {...state, cartProducts: state.cartProducts};

          case 'CLEAR_CART':
               return {...state, cartProducts: []};
               
          default:
               return state;
     }
}
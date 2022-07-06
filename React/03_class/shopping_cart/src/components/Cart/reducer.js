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
     
          default:
               return state;
     }
}
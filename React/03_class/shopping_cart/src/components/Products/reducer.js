const initialState = {
     products: []
}

export const product = (state=initialState, action) => {
     switch (action.type) {
          case 'SET_PRODUCTS':
               return 
     
          default:
               return state;
     }
}
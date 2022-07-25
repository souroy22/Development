const initialState = {
     products: [],
     currentPage: null,
     totalPage: null
}

export const product = (state=initialState, action) => {
     switch (action.type) {
          case 'GET_PRODUCTS':
               return {...state, products: action.data, currentPage: action.page || 1, totalPage: action.totalPage || 1};

          default:
               return state;
     }
}
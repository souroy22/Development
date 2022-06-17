const initialState = {
     user: {}
}


export const profileReducer = (state=initialState, action) => {
     switch (action.type) {
          case 'SET_USER':
               return {...state, user: action.payload};
          
          default:
               return state;
     }
}

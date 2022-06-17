const initialState = {
     counter: 1,
}


export const homeReducer = (state=initialState, action) => {
     switch (action.type) {
          case 'INCREMENT':
               return {...state, counter: state.counter + 1};

          case 'DECREMENT':
               return {...state, counter: state.counter - 1};

          case 'MULTIPLY':
               return {...state, counter: state.counter * 2};

          default:
               return state;
     }
}

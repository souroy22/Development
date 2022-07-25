const initialState = {
     newsData: []
};

export const news = (state=initialState, action) => {
     switch (action.type) {
          case 'SET_NEWS_DATA':
               return {...state, newsData: action.payload};
          default:
               return state;
     }
}
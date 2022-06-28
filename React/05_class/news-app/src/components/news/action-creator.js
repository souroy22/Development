import axios from 'axios';

const API_KEY = '2db38169103644d0bfe581f9b6e6e19a';



export const getAllNews = () => async (dispatch) => {
     try {
          const response = await axios.get(`https://newsapi.org/v2/everything?apiKey=${API_KEY}`);
          dispatch({
               type: 'SET_NEWS_DATA',
               payload: response.data.results
          });
          console.log(response.data.results);
     } catch (error) {
          console.log(`Error while getting all news, ${error.message}`);
     }
}
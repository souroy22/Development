import {combineReducers} from 'redux';
import {news} from '../components/news/reducer';
import {bookmark} from '../components/bookmark/reducer';

const allReducers = combineReducers({
     news,
     bookmark
});


export default allReducers;
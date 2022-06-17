import {combineReducers} from 'redux';
import {homeReducer} from '../components/Home/reducer';
import {profileReducer} from '../components/Profile/reducer';

const allReducers = combineReducers({
     homeReducer,
     profileReducer
});


export default allReducers;
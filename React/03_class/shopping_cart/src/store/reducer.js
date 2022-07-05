import {combineReducers} from 'redux';
import {product} from '../components/Products/reducer';
import {cart} from '../components/Cart/reducer';

const allReducers = combineReducers({
     cart,
     product
});


export default allReducers;
import {combineReducers} from 'redux';
import {product} from '../components/Products/reducer';
import {cart} from '../components/Cart/reducer';
import {wishlist} from '../components/wishlist/reducer';

const allReducers = combineReducers({
     cart,
     product,
     wishlist
});


export default allReducers;
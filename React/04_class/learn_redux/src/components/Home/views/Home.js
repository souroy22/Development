import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, multiply } from '../action-creator';

const Home = () => {
     const dispatch = useDispatch();
     const {counter} = useSelector(state => state.homeReducer);
     const {user} = useSelector(state => state.profileReducer);

  return (
    <div>
     <button onClick={() => dispatch(decrement())}>-</button>
     <h1>{counter}</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(multiply())}>*</button>
    </div>
  )
}

export default Home;
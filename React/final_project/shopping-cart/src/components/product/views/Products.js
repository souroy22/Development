import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../action-creator';
import Product from './Product';
import '../styles/products.css';

const Products = () => {
     const dispatch = useDispatch();
     const {products} = useSelector(state => state.product);
     useEffect(() => {
          dispatch(getProducts());
     }, []);
  return (
    <div className='products-section'>
     {
          products.map(data => <Product key={data.id} data={data} />)
     }
    </div>
  )
}

export default Products;
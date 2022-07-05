import React from 'react';
import Product from '../../Products/views/Product';

const Cart = ({cart}) => {
  return (
    <div>
      {
        cart.map(product => (<Product key={product.id} product={product} cartRoute={true} />))
      }
    </div>
  )
}

export default Cart;
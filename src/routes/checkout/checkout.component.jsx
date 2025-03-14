import { UserContext } from '../../contexts/user.context';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';
import { useContext } from 'react';

const Checkout = ()=>{

  const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {
          cartItems.map((cartItem)=>{
            const {id, name, quantity} = cartItem
            return( 
              <div key={id}>
                <h2>{name}</h2>
                <span onClick={()=>removeItemFromCart(cartItem)}>decrement </span>
                <span>{quantity}</span>
                <span onClick={()=>addItemToCart(cartItem)}> increment</span>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Checkout;
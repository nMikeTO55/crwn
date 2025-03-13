import { useContext } from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context.jsx';

import './cart-icon.styles.scss';

const CartIcon = ()=> {

  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <img src={ShoppingIcon} alt="SVG" className='shopping-icon'/>
      <span className='item-count'>{cartItemCount}</span>
    </div>
  )
}

export default CartIcon;
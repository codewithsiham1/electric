import React, { useEffect, useState } from 'react';
import CartItem from '../Cart/Cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.product_id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.product_id} product={item} removeFromCart={removeFromCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

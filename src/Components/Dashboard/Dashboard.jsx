

import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import WishlistItem from '../WishlistItem/WishlistItem';
import './Dashboard.css'
const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [activeTab, setActiveTab] = useState('cart');
  const [sortOption, setSortOption] = useState(null); 

  useEffect(() => {
   
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const savedWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartItems(savedCartItems);
    setWishlistItems(savedWishlistItems);
  }, []);


  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.product_id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  
  const sortCartItemsByPrice = (order = 'asc') => {
    const sortedCart = [...cartItems].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price; 
      } else {
        return b.price - a.price; 
      }
    });
    setCartItems(sortedCart);
    localStorage.setItem('cart', JSON.stringify(sortedCart));
  };

  
  const sortCartItemsByRating = (order = 'asc') => {
    const sortedCart = [...cartItems].sort((a, b) => {
      if (order === 'asc') {
        return a.rating - b.rating; 
      } else {
        return b.rating - a.rating;
      }
    });
    setCartItems(sortedCart);
    localStorage.setItem('cart', JSON.stringify(sortedCart));
  };

  
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.product_id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="dashboard p-4">
     
  <div className='banner flex flex-col justify-center items-center'>
<div>
<h1 className="banner-heading">Welcome to Our Shop!</h1>
<p className="banner-subheading">Find the best products here at the best prices</p>
</div>
  <div className="tabs flex flex-row">
        <button
          className={`tab ${activeTab === 'cart' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          Cart
        </button>
        <button
          className={`tab ${activeTab === 'wishlist' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wishlist
        </button>
      </div>
  </div>

    
      {activeTab === 'cart' ? (
        <div>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <>
              
              <div className="sort-buttons mb-4">
                <button onClick={() => sortCartItemsByPrice('asc')} className="btn btn-outline">Sort by Price (Asc)</button>
                <button onClick={() => sortCartItemsByPrice('desc')} className="btn btn-outline">Sort by Price (Desc)</button>
                <button onClick={() => sortCartItemsByRating('asc')} className="btn btn-outline">Sort by Rating (Asc)</button>
                <button onClick={() => sortCartItemsByRating('desc')} className="btn btn-outline">Sort by Rating (Desc)</button>
              </div>

              <div className="cart-items">
                {cartItems.map(item => (
                  <CartItem key={item.product_id} product={item} removeFromCart={removeFromCart} />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div>
        
          {wishlistItems.length === 0 ? (
            <p>No items in the wishlist.</p>
          ) : (
            <div className="wishlist-items">
              {wishlistItems.map(item => (
                <WishlistItem key={item.product_id} product={item} removeFromWishlist={removeFromWishlist} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;


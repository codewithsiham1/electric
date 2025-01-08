import React, { useEffect, useState } from 'react';
import WishlistItem from '../WishlistItem/WishlistItem';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(wishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.product_id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="wishlist-container">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div>
          {wishlistItems.map(item => (
            <WishlistItem key={item.product_id} product={item} removeFromWishlist={removeFromWishlist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

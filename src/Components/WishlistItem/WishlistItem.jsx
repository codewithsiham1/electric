import React from 'react';

const WishlistItem = ({ product, removeFromWishlist }) => {
  return (
    <div className="wishlist-item flex items-center justify-between p-4 bg-gray-200 mb-4 rounded">
      <div className="flex items-center">
        <img src={product.product_image} alt={product.product_title} className="w-16 h-16 mr-4" />
        <div>
          <h4 className="font-semibold">{product.product_title}</h4>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromWishlist(product.product_id)}
        className="btn btn-danger text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default WishlistItem;

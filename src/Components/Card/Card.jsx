import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product, onAddToCart, onAddToWishlist }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    alert(`${product.product_title} has been added to your cart!`);
  };

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      onAddToWishlist(product);
      setIsWishlisted(true);
      alert(`${product.product_title} has been added to your wishlist!`);
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl gap-9">
      <figure>
        <img
          src={product.product_image}
          className="w-full h-48 overflow-hidden rounded-2xl"
          alt={product.product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating} ★</p>

        <div className="card-actions flex justify-between">
          <Link to={`/product/${product.product_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
  
        </div>
        
      </div>
    </div>
  );
};

export default Card;


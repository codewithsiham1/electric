import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch product details from the API (or your local data)
  useEffect(() => {
    fetch('/electric.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(item => item.product_id === id);
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Function to update cart count in the Navbar
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify(cart));
    // Trigger a navbar update using a state or context (use state hook here if needed)
  };

  // Function to update wishlist count in the Navbar
  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Trigger a navbar update using a state or context (use state hook here if needed)
  };

  // Add product to cart
  const addToCart = () => {
    if (product.price > 5000) {
      toast.error('This product exceeds the price limit of $5000 and cannot be added to the cart!');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();  // Update cart count in navbar
    toast.success(`${product.product_title} has been added to your cart!`);
  };

  // Add product to wishlist
  const addToWishlist = () => {
    if (product.price > 5000) {
      toast.error('This product exceeds the price limit of $5000 and cannot be added to the wishlist!');
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.product_id === product.product_id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistCount();  // Update wishlist count in navbar
      toast.success(`${product.product_title} has been added to your wishlist!`);
    } else {
      toast.info(`${product.product_title} is already in your wishlist!`);
    }
  };

  return (
    <div className="product-details flex justify-center items-center flex-col p-4">
      <img src={product.product_image} alt={product.product_title} className="w-64 h-64 object-cover mb-4" />
      <h2 className="text-2xl font-semibold">{product.product_title}</h2>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <div className="flex gap-4 mt-6">
        <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
        <button onClick={addToWishlist} className="btn btn-secondary">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default ProductDetails;


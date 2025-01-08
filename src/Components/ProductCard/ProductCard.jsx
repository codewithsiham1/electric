import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import { toast } from 'react-toastify';

const ProductCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category || category === 'All Products') {
      setProducts(data);
    } else {
      const filteredByCategory = data.filter(product => product.category === category);
      setProducts(filteredByCategory);
    }
  }, [category, data]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${product.product_title} has been added to your cart!`);
  };

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.product_id === product.product_id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      toast.success(`${product.product_title} has been added to your wishlist!`);
    } else {
      toast.info(`${product.product_title} is already in your wishlist!`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <Card
            key={product.product_id}
            product={product}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

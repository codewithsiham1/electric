import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const product = data.find(item => item.product_id === id);

  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    alert(`${product.product_title} কার্টে যোগ করা হয়েছে!`);
    // এখানে আপনি কার্ট ম্যানেজমেন্ট যুক্ত করতে পারেন
  };

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      setIsWishlisted(true);
      alert(`${product.product_title} উইশলিস্টে যোগ করা হয়েছে!`);
      // এখানে আপনি উইশলিস্ট ম্যানেজমেন্ট যুক্ত করতে পারেন
    }
  };

  if (!product) {
    return <div>পণ্য পাওয়া যায়নি।</div>;
  }

  return (
    <div className="detail-container flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-8">
      {/* পণ্যের ছবি */}
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* পণ্যের তথ্য */}
      <div className="info mt-4 text-center">
        <h1 className="text-3xl font-bold">{product.product_title}</h1>
        <p className="text-gray-600">ক্যাটাগরি: {product.category}</p>
        <p className="text-2xl font-semibold text-green-500">মূল্য: ${product.price}</p>
        <p className="text-sm text-gray-500">রেটিং: {product.rating} ★</p>
        <p className="mt-2">{product.description}</p>
        <ul className="specifications mt-4 text-left text-sm text-gray-600">
          <li><strong>ব্র্যান্ড:</strong> {product.brand}</li>
          <li>
            <strong>বৈশিষ্ট্য:</strong>
            <ul className="list-disc list-inside">
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* বাটনসমূহ */}
      <div className="actions mt-6 flex gap-4">
        <button
          onClick={handleAddToCart}
          className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          🛒 কার্টে যোগ করুন
        </button>
        <button
          onClick={handleAddToWishlist}
          className={`btn py-2 px-4 rounded ${
            isWishlisted
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
          disabled={isWishlisted}
        >
          ♥ {isWishlisted ? 'উইশলিস্ট করা হয়েছে' : 'উইশলিস্টে যোগ করুন'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
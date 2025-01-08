import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Statistics = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2>Product Statistics</h2>
      {/* Add your chart here */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data.map(product => (
          <Card key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;

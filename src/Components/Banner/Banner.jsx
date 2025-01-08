
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <p className='flex flex-col justify-center items-center text-4xl font-bold'>Upgrade Your Tech Accessorize <br/><span> Gadget Heaven Accessories</span></p>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <Link to="/dashboard" className="banner-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;

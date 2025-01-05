import React from 'react';


import Heading from '../Heading/Heading';

import'./Home.css'
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useLoaderData } from 'react-router-dom';


const Home = () => {

const categories=useLoaderData()
console.log(categories)
  
    return (
        <div className='home-container'>
       
        <div className='heading-section'>
        <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
        </div>
        <div className="content-wrapper">
                {/* Sidebar with category buttons on the left */}
                <div className="sidebar">
                    <Sidebar categories={categories} />
                </div>

                {/* Product Cards on the right */}
                <div className="products">
                    <Outlet /> {/* Dynamic content (ProductCard component) */}
                </div>
            </div>
        </div>
        
    );
};

export default Home;
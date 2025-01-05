import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';


const ProductCard = () => {
    const data=useLoaderData()
    const {category}=useParams()
    const[product,setProduct]=useState([])
    useEffect(()=>{
        if ( !category ||category === 'All Products') {
            
            setProduct(data);  
        } else {
            
            const filteredByCategory = data.filter(product => product.category === category);
            setProduct(filteredByCategory);  
            
        }
    },[category,data])
    console.log(data)
    return (
       <div className='flex flex-col'>
       
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {product.map(product=><Card key={product.product_id} product={product}></Card>)}
        </div>
       </div>
    );
};

export default ProductCard;
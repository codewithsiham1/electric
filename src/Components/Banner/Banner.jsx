// import React from "react";
// import "./Banner.css";


// const Banner = () => {
   
//   return (
//   <>
//    <div className=" ">
//    import React from 'react';
// import'./Navbar.css'
// import { NavLink,useLocation } from 'react-router-dom';
// import { CiShoppingCart } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const location = useLocation();
//   const navigate=useNavigate()
//     return (
//       <>
//         <div className={`navbar ${location.pathname === '/' ? 'home-navbar' : ''}`}>
//            <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <ul className="navbar-links">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/statistics"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//             Statistics
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Dashboard
//             </NavLink>
//           </li>
//         </ul>
//       </ul>
//     </div>
//     <div className="">
//     <h2 className="">GadgetHeaven✨</h2>
//     </div>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//     <ul className="navbar-links">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/statistics"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//             Statistics
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               Dashboard
//             </NavLink>
//           </li>
//         </ul>
//     </ul>
//   </div>
//   <div className="navbar-end flex text-2xl font-bold  text-red-400 flex-row gap-6">
//     <p><CiShoppingCart /></p>
//    <p><FaRegHeart /></p>
//   </div>
// </div>

//         </div>
//         {/*  */}
//         <div className="banner">
//       <div>
//         <div className="py-10">
//           <h1 className="flex flex-col justify-center items-center text-4xl font-bold text-white">
//             Upgrade Your Tech Accessorize with<br></br>{" "}
//             <p>Gadget Heaven Accessories</p>
//           </h1>
//           <p className="font-2xl font-thin flex flex-col justify-center items-center">
//             Explore the latest gadgets that will take your experience to the
//             next level. From smart devices<br></br>{" "}
//             <p>to the coolest accessories, we have it all!</p>
//           </p>
//           <button  onClick={() => navigate('/dashboard')} className="banner-button">Shop Now</button>
//         </div>
//       </div>
//     </div>
//         {/*  */}
//         {/*  */}
//       <div className='banner-image'>

//       </div>
//       </>
//     );
// };

// export default Navbar;
//    </div>
//   </>
//   );
// };

// export default Banner;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({product}) => {
//    const {product_id,product_title,product_image,category,price,description,specifications,availability,rating,brand }=product;
//     return (
//         <div>
//     <div className="card card-compact bg-base-100 w-80 shadow-xl gap-9">
//       <figure>
//         <img
//           src={product_image}
//           className='w-full h-48 overflow-hidden rounded-2xl'
//           alt={product_title} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{product_title}</h2>
//         <div>
//           <p>category: {category}</p>
//           <p>Price: ${price}</p>
//           <p>Rating: {rating} ★</p>
//           <p>Brand: {brand}</p>
//           <p>Description:
//             <ul className="list-disc list-inside">
//               {specifications.map((spec, index) => (
//                 <li key={index}>{spec}</li>
//               ))}
//             </ul>
//           </p>
//           <p>{description}</p>
//         </div>
//         <div className="card-actions">
//           <Link to={`/product/${product_id}`}>
//             <button className="btn btn-primary">details</button>
//           </Link>
//         </div>
//       </div>
//     </div>
// </div>
//     );
// };

// export default Card;

// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Card from '../Card/Card';


// const ProductCard = () => {
//     const data=useLoaderData()
//     const {category}=useParams()
//     const[product,setProduct]=useState([])
//     useEffect(()=>{
//         if ( !category ||category === 'All Products') {
            
//             setProduct(data);  
//         } else {
            
//             const filteredByCategory = data.filter(product => product.category === category);
//             setProduct(filteredByCategory);  
            
//         }
//     },[category,data])
//     console.log(data)
//     return (
//        <div className='flex flex-col'>
       
//          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//       {product.map(product=><Card key={product.product_id} product={product}></Card>)}
//         </div>
//        </div>
//     );
// };

// export default ProductCard;




// import React from 'react';
// import './Navbar.css';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { CiShoppingCart } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className={`navbar ${location.pathname === '/' ? 'home-navbar' : ''}`}>
//         <div className="navbar bg-base-100">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16" />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                 <ul className="navbar-links">
//                   <li>
//                     <NavLink
//                       to="/"
//                       className={({ isActive }) => (isActive ? 'active-link' : '')}
//                     >
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/statistics"
//                       className={({ isActive }) => (isActive ? 'active-link' : '')}
//                     >
//                        Statistics
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/dashboard"
//                       className={({ isActive }) => (isActive ? 'active-link' : '')}
//                     >
//                       Dashboard
//                     </NavLink>
//                   </li>
//                 </ul>
//               </ul>
//             </div>
//             <div className="">
//               <h2 className="">GadgetHeaven✨</h2>
//             </div>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//               <ul className="navbar-links">
//                 <li>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) => (isActive ? 'active-link' : '')}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/statistics"
//                     className={({ isActive }) => (isActive ? 'active-link' : '')}
//                   >
//                       Statistics
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/dashboard"
//                     className={({ isActive }) => (isActive ? 'active-link' : '')}
//                   >
//                     Dashboard
//                   </NavLink>
//                 </li>
//               </ul>
//             </ul>
//           </div>
//           <div className="navbar-end flex text-2xl font-bold text-red-400 flex-row gap-6">
//             <button onClick={() => navigate('/cart')}><CiShoppingCart /></button>
//             <button onClick={() => navigate('/wishlist')}><FaRegHeart /></button>
//           </div>
//         </div>
//       </div>
   
//       <div className="banner">
//         <div>
//           <div className="py-10">
//             <h1 className="flex flex-col justify-center items-center text-4xl font-bold text-white">
//             Upgrade Your Tech Accessorize with Gadget Heaven Accessories<br />
//               <span>Gadget Heaven Accessories</span>
//             </h1>
//             <p className="font-2xl font-thin flex flex-col justify-center items-center">
//             Explore the latest gadgets that will take your experience to the next level. <br />
//               <span> From smart devices to the coolest accessories, we have it all!</span>
//             </p>
//             <button onClick={() => navigate('/dashboard')} className="banner-button mt-4">Shop Now</button>
//           </div>
//         </div>
//       </div>
//       <div className='banner-image'>
      
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const data = useLoaderData();
//   const { id } = useParams();
//   const product = data.find(item => item.product_id === id);

//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const handleAddToCart = () => {
//     alert(`${product.product_title} cart add!`);
   
//   };

//   const handleAddToWishlist = () => {
//     if (!isWishlisted) {
//       setIsWishlisted(true);
//       alert(`${product.product_title} wishlist add!`);
      
//     }
//   };

//   if (!product) {
//     return <div>dont recive</div>;
//   }

//   return (
//     <div className="detail-container flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-8">
     
//       <img
//         src={product.product_image}
//         alt={product.product_title}
//         className="w-full h-64 object-cover rounded-lg"
//       />

     
//       <div className="info mt-4 text-center">
//         <h1 className="text-3xl font-bold">{product.product_title}</h1>
//         <p className="text-gray-600">category: {product.category}</p>
//         <p className="text-2xl font-semibold text-green-500">Price: ${product.price}</p>
//         <p className="text-sm text-gray-500">Rating: {product.rating} ★</p>
//         <p className="mt-2">{product.description}</p>
//         <ul className="specifications mt-4 text-left text-sm text-gray-600">
//           <li><strong>Brand:</strong> {product.brand}</li>
//           <li>
//             <strong>Description:</strong>
//             <ul className="list-disc list-inside">
//               {product.specifications.map((spec, index) => (
//                 <li key={index}>{spec}</li>
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </div>

     
//       <div className="actions mt-6 flex gap-4">
//         <button
//           onClick={handleAddToCart}
//           className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           🛒 add cart
//         </button>
//         <button
//           onClick={handleAddToWishlist}
//           className={`btn py-2 px-4 rounded ${
//             isWishlisted
//               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               : 'bg-red-500 text-white hover:bg-red-600'
//           }`}
//           disabled={isWishlisted}
//         >
//           ♥ {isWishlisted ? 'wishlist' : 'wishlist add'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
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

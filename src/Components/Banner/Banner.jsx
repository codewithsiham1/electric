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

const Card = ({product}) => {
   const {product_id,product_title,product_image,category,price,description,specifications,availability,rating,brand }=product;
    return (
        <div>
    <div className="card card-compact bg-base-100 w-80 shadow-xl gap-9">
      <figure>
        <img
          src={product_image}
          className='w-full h-48 overflow-hidden rounded-2xl'
          alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <div>
          <p>category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating} ★</p>
          <p>Brand: {brand}</p>
          <p>Description:
            <ul className="list-disc list-inside">
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </p>
          <p>{description}</p>
        </div>
        <div className="card-actions">
          <Link to={`/product/${product_id}`}>
            <button className="btn btn-primary">details</button>
          </Link>
        </div>
      </div>
    </div>
</div>
    );
};

export default Card;
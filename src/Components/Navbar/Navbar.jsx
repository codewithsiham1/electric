// import React, { useEffect, useState } from 'react';
// import { CiShoppingCart } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     setCartCount(cart.length);
//     setWishlistCount(wishlist.length);
//   }, []);

//   return (
//     <div className={`navbar ${location.pathname === '/' ? 'home-navbar' : ''}`}>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <h2 className="text-xl font-bold">GadgetHeaven</h2>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
//             <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active-link' : '')}>Statistics</NavLink></li>
//             <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>Dashboard</NavLink></li>
//           </ul>
//         </div>
//         <div className="navbar-end flex text-2xl font-bold text-red-400 flex-row gap-6">
//           <button onClick={() => navigate('/cart')}>
//             <CiShoppingCart /> {cartCount}
//           </button>
//           <button onClick={() => navigate('/wishlist')}>
//             <FaRegHeart /> {wishlistCount}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
  }, []);

  return (
    <div className={`navbar ${location.pathname === '/' ? 'home-navbar' : ''}`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h2 className="text-xl font-bold">GadgetHeaven</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
            <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active-link' : '')}>Statistics</NavLink></li>
            <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>Dashboard</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex text-2xl font-bold text-red-400 flex-row gap-6">
          <button onClick={() => navigate('/cart')}>
            <CiShoppingCart /> {cartCount}
          </button>
          <button onClick={() => navigate('/wishlist')}>
            <FaRegHeart /> {wishlistCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

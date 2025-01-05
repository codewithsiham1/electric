import React from 'react';
import './Navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className={`navbar ${location.pathname === '/' ? 'home-navbar' : ''}`}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <ul className="navbar-links">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/statistics"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                       Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="">
              <h2 className="">GadgetHeaven✨</h2>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <ul className="navbar-links">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                  >
                      Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
          <div className="navbar-end flex text-2xl font-bold text-red-400 flex-row gap-6">
            <button onClick={() => navigate('/cart')}><CiShoppingCart /></button>
            <button onClick={() => navigate('/wishlist')}><FaRegHeart /></button>
          </div>
        </div>
      </div>
      {/* ব্যানার */}
      <div className="banner">
        <div>
          <div className="py-10">
            <h1 className="flex flex-col justify-center items-center text-4xl font-bold text-white">
              আপনার টেক অ্যাকসেসরাইজ আপগ্রেড করুন<br />
              <span>Gadget Heaven Accessories</span>
            </h1>
            <p className="font-2xl font-thin flex flex-col justify-center items-center">
              সর্বশেষ গ্যাজেট এক্সপ্লোর করুন যা আপনার অভিজ্ঞতাকে পরবর্তী স্তরে নিয়ে যাবে। স্মার্ট ডিভাইস থেকে<br />
              <span>সবচেয়ে কুল অ্যাকসেসরিজ, আমাদের কাছে সবই আছে!</span>
            </p>
            <button onClick={() => navigate('/dashboard')} className="banner-button mt-4">এখনই কিনুন</button>
          </div>
        </div>
      </div>
      <div className='banner-image'>
        {/* ব্যানার ইমেজ যুক্ত করুন */}
      </div>
    </>
  );
};

export default Navbar;
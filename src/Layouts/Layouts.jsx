import React from 'react';

import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';

const Layouts = () => {
    return (
        <div>
            {/* Navbar */}
            <div>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(70vh-232px)]'><Outlet></Outlet></div>
            {/* Dynamic section */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layouts;
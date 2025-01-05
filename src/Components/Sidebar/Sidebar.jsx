import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({categories}) => {
    return (
        <div>
           
            <div role="tablist" className="tabs tabs-boxed flex flex-col">
 {categories.map(category=> <NavLink key={category.category} to={`/category/${category.category}`} className={({isActive})=>`tab ${isActive ?'tab-active':''}`}>{category.category} </NavLink>)}

</div>
        </div>
    );
};

export default Sidebar;
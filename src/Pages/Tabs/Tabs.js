import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Tabs = () => {
    return (
        <div>
           <Nav defaultActiveKey="/home" className="flex-column">
           
                <Link to="logo"> logo </Link>
                <Link to="about"> about </Link>
                <Link to="home"> home </Link>
               
                <div className="content">
        <Outlet />
      </div>
            </Nav>
        </div>
    );
};

export default Tabs;
import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='body'>
           
           
             <nav>
        
        <div className='nav__left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png' />
          <div className='nav__search'>
            <i className="material-icons">search</i>
            <input type='text' placeholder="Search Facebook"/>
          </div>
        </div>

        <div className='nav__mid'>
            <a  className='icon'>
              <i className='material-icons'>home</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>slideshow</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>groups</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>gamepad</i>
            </a>
        </div>

        <div className="nav__right">
            <div className="buttons">
                <a href="#"><i className='material-icons'>add</i></a>
                <a href="#"><i className='material-icons'>messenger</i></a>
                <a href="#"><i className='material-icons'>notifications</i></a>
                <a href="#"><i className='material-icons'>arrow_drop_down</i></a>
            </div>
        </div>
    </nav>
           </div>
  
      
    );
};

export default Navbar;
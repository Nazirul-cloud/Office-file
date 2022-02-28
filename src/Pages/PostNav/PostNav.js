import React from 'react';
import { Link } from 'react-router-dom';
import './PostNav.css'
const PostNav = () => {
    return (
      
           <div className='container'>
               <div className='row'>
                    <div className="col-md-12">
            <div id="content" className="content content-full-width">
                <div className="profile">
                    <div className="profile-header">
                    <ul className="profile-header-tab nav nav-tabs">
                     <li className="nav-item"><Link to='/' className="nav-link" data-toggle="tab">Group</Link></li>
                     <li className="nav-item"><Link to='/' className="nav-link" data-toggle="tab">Group</Link></li>
                     <li className="nav-item"><Link to='/' className="nav-link" data-toggle="tab">Group</Link></li>
                     <li className="nav-item"><Link to='/' className="nav-link" data-toggle="tab">Group</Link></li>
                     <li className="nav-item"><Link to='/' className="nav-link" data-toggle="tab">Group</Link></li>
                     
                  </ul>
                    </div>
                </div>
            </div>
        </div>
               </div>
           </div>
      
    );
};

export default PostNav;
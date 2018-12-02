import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../../util/isLoggedIn';

import './Navbar.scss';

console.log(isLoggedIn);

const Navbar = () => (
  <header className="navbar">
    <div className="logo"><Link to="/">mydiary</Link></div>
    <div className="nav-list">
      {isLoggedIn ?
        <ul>
        <Link to="/signup"><li>SIGN UP</li></Link>
        <Link to="/signin"><li>SIGN IN</li></Link>
      </ul>
        :
        <ul>
        <Link to="/"><li>SIGN OUT</li></Link>
      </ul>
      }
    </div>
  </header>
);

export default Navbar;


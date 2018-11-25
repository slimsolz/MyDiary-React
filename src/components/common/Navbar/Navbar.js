import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo"><Link to="/">mydiary</Link></div>
      <div className="nav-list">
        <ul>
          <Link to="/signup"><li>SIGN UP</li></Link>
          <Link to="/login"><li>SIGN IN</li></Link>
        </ul>
      </div>
    </header>
  )
}

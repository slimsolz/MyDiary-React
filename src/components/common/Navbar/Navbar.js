import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isLoggedIn from '../../../util/isLoggedIn';

import './Navbar.scss';

class Navbar extends Component {

  constructor(){
    super();

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    localStorage.removeItem('token');
  }
  render () {
    return(
      <header className="navbar">
        <div className="logo"><Link to="/">mydiary</Link></div>
        <div className="nav-list">
          {!isLoggedIn ?
            <ul>
            <Link to="/signup"><li>SIGN UP</li></Link>
            <Link to="/signin"><li>SIGN IN</li></Link>
          </ul>
            :
            <ul>
            <Link to="/" onClick={this.handleSignOut}><li>SIGN OUT</li></Link>
          </ul>
          }
        </div>
      </header>
    );
  }
}

export default Navbar;


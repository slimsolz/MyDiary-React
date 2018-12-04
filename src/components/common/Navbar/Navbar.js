import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isLoggedIn from '../../../util/isLoggedIn';
import { signout } from '../../../actions/userAction';

import './Navbar.scss';

class Navbar extends Component {

  constructor(){
    super();

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    localStorage.removeItem('token');
    this.props.signout();
  }
  render () {
    return(
      <header className="navbar">
        <div className="logo"><Link to="/">mydiary</Link></div>
        <div className="nav-list">
          {!this.props.user.isAuth ?
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

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, { signout })(Navbar);


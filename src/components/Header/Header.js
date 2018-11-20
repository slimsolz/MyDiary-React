import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <div>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
      </ul>
    </div>
  )
};

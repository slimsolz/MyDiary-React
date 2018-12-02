import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

export default function Main() {
  return (
    <div className="main-wrapper">
      <div className="intro">
        <h1>My Diary</h1>
        <p>
          Everyone can have their own personal online diary or journal on the Internet! We will host your journal online at no cost. Go ahead and create your own private diary today. Our focus is on security and privacy, and diaries are private by default
        </p>
        <Link to="/signup"><button>Create An Account</button></Link>
      </div>
    </div>
  )
}

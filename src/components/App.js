import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Footer from './common/Footer/Footer';
import Navbar from './common/Navbar/Navbar';
import Signup from '../containers/SignupPage/signup';
import Main from './Main/Main';

import './App.scss';

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/entires' component={Main} />
      </Switch>
      <Footer />
    </div>
  )
}

import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../privateRoute';

import Footer from './common/Footer/Footer';
import Navbar from './common/Navbar/Navbar';
import Signup from '../containers/SignupPage/signup';
import Signin from '../containers/SigninPage/Signin';
import Main from './Main/Main';
import AllEntries from '../containers/AllEntries/AllEntries';
import NewEntry from '../containers/NewEntry/NewEntry';
import EditEntry from '../containers/EditEntry/EditEntry';
import ViewEntry from '../containers/ViewEntry/ViewEntry';

import './App.scss';

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <PrivateRoute path='/entries' component={AllEntries} />
        <PrivateRoute path='/new_Entry' component={NewEntry} />
        <PrivateRoute path='/edit_Entry' component={EditEntry} />
        <PrivateRoute path='/view_Entry' component={ViewEntry} />
      </Switch>
      <Footer />
    </div>
  )
}

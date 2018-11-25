import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Footer from './common/Footer/Footer';
import Navbar from './common/Navbar/Navbar';
import Main from './Main/Main';
import './App.scss';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Main} />
      </Switch>
      <h1>My Diary app</h1>
      <Footer />
    </div>
  )
}

import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/login' component={Main} />
      </Switch>
      <h1>My Diary app</h1>
    </div>
  )
}

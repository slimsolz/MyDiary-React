import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';
import setAuthToken from './util/AuthUtil';


if (localStorage.token) {
  // setting token to request headers for authentication
  setAuthToken(localStorage.token);
  // adding user object to User's store
  // store.dispatch(asyncActions(LOGIN).success(jwtDecode(localStorage.token)));
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

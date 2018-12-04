import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,

} from './types';
import axios from 'axios';
import setAuthToken from '../util/AuthUtil';

export const signup = (userData) => dispatch => {
  return axios.post('http://localhost:3000/api/v1/auth/signup', userData)
    .then(response => {
      if(response === 201) {
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        dispatch({ type: SIGNUP_SUCCESS, payload: response });
        return response;
      }
      console.log(response.data);
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response.data });
      console.log(err.response.data);
      throw err;
    })
  }

  export const signin = (userData) => dispatch => {
    return axios.post('http://localhost:3000/api/v1/auth/signin', userData)
      .then(response => {
        if(response.status === 200) {
          localStorage.setItem('token', response.data.token);
          setAuthToken(response.data.token);
          dispatch({ type: SIGNIN_SUCCESS, payload: response });
          return response;
        }
        console.log(response.data);
      })
      .catch(err => {
        dispatch({ type: SIGNIN_FAILURE, payload: err.response.data });
        console.log(err.response.data);
        throw err;
      })
    }

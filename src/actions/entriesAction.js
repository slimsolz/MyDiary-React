import {
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_FAILURE,
  NEW_ENTRY_SUCCESS,
  NEW_ENTRY_FAILURE,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE,
  VIEW_ENTRY_SUCCESS,
  VIEW_ENTRY_FAILURE
 } from './types';
import axios from 'axios';
import API from './API';

export const fetchEntries = () => dispatch => {
    return axios.get(`${API}/entries`)
      .then(res => {
        dispatch({
          type: FETCH_ENTRIES_SUCCESS,
          payload: res.data.entries || []
        })
      })
      .catch(err => {
        dispatch({ type: FETCH_ENTRIES_FAILURE, payload: err.response.data });
        console.log(err.response.data);
        throw err;
      })
  }

  export const newEntry = (entry) => dispatch => {
    return axios.post(`${API}/entries`, entry)
      .then(res => {
        dispatch({
          type: NEW_ENTRY_SUCCESS,
          payload: res
        })
      })
      .catch(err => {
        dispatch({ type: NEW_ENTRY_FAILURE, payload: err.response.data });
        console.log(err.response.data);
        throw err;
      })
  }

  export const deleteEntry = (entryId) => dispatch => {
    return axios.delete(`${API}/entries/${entryId}`)
      .then(res => {
        dispatch({
          type: DELETE_ENTRY_SUCCESS,
          payload: {entryId, message: res.data.message}
        })
      })
      .catch(err => {
        dispatch({ type: DELETE_ENTRY_FAILURE, payload: err.response.data })
        console.log(err.response.data);
        throw err;
      });
  }

  export const updateEntry = (entryId, entry) => dispatch => {
    return axios.put(`${API}/entries/${entryId}`, entry)
      .then(res => {
        dispatch({
          type: UPDATE_ENTRY_SUCCESS,
          payload: res
        })
      })
      .catch(err => {
        dispatch({ type: UPDATE_ENTRY_FAILURE, payload: err.response.data })
        console.log(err.response.data);
        throw err;
      });
  }

  export const fetchEntry = (entryId) => dispatch => {
    return axios.get(`${API}/entries/${entryId}`)
      .then(res => {
        console.log(res);
        dispatch({
          type: VIEW_ENTRY_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ type: VIEW_ENTRY_FAILURE, payload: err.response.data })
        console.log(err.response.data);
        throw err;
      });
  }

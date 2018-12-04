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
} from '../actions/types';

const initialState = {
  entry: {},
  entries: [],
  message: null,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        message: action.payload.message
      }
    case FETCH_ENTRIES_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case NEW_ENTRY_SUCCESS:
      return {
        ...state,
        entry: action.payload,
        message: action.payload.message
      }
    case NEW_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        message: action.payload.message
      }
    case DELETE_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        message: action.payload.message
      }
    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case VIEW_ENTRY_SUCCESS:
      return {
        ...state,
        entry: action.payload.entry,
        message: action.payload.message
      }
    case VIEW_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    default:
      return state;
  }
}

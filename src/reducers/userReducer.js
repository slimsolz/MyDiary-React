import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT

} from '../actions/types';

const initialState = {
  user: {},
  isAuth: false,
  error: null,
  message: null
};

export default function(state = initialState, action) {
  switch(action.type){
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        message: action.payload.message
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        message: action.payload.message
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case SIGNOUT:
        return initialState;
    default:
      return state;
  }
}

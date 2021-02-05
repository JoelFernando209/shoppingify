import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuth: false
}

const setAuth = (state, action) => {
  return {
    ...state,
    isAuth: action.value
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_AUTH: return setAuth(state, action)
      
    default:
      return state;
  }
};

export default reducer;
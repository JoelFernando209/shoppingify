import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentItemInfo: {}
};

const setCurrentItem = (state, action) => {
  return {
    ...state,
    currentItemInfo: action.item
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_ITEM: return setCurrentItem(state, action)
    
    default: return state
  }
};

export default reducer;
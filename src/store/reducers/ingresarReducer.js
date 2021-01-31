import * as actionTypes from '../actions/actionTypes';

const initialState = {
  popupStatus: false
}

const ingresarPopup = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_LOG_POPUP:
      return {
        popupStatus: false
      }
    case actionTypes.SHOW_LOG_POPUP:
      return {
        popupStatus: true
      }
    case actionTypes.SET_LOG_POPUP:
      return {
        popupStatus: action.value
      }
    default:
      return state;
  }
};

export default ingresarPopup;
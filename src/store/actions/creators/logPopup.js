import * as actionTypes from '../actionTypes';

export const setLogPopup = result => {
  return {
    type: actionTypes.SET_LOG_POPUP,
    value: result
  }
};

export const hideLogPopup = () => {
  return {
    type: actionTypes.HIDE_LOG_POPUP
  }
};

export const showLogPopup = () => {
  return {
    type: actionTypes.SHOW_LOG_POPUP
  }
};

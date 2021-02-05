import * as actionTypes from '../actionTypes';

import { isUserAuth } from '../../../firebase/FirebaseUtils/firebase.auth';

const setAuth = value => ({
  type: actionTypes.SET_AUTH,
  value
});

export const checkAuth = () => {
  return dispatch => {
    isUserAuth(result => {
      dispatch(setAuth(result))
    });
  };
}
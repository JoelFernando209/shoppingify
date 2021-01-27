import React from 'react';

import LoginForm from './LoginForm/LoginForm';

import { validateEmail, validatePw } from '../../../utils/validation.utils.js';
import { signInWithEmailAndPassword } from '../../../firebase/FirebaseUtils/firebase.auth';

import classes from './LoginDashboard.module.scss';

const LoginDashboard = (props) => {
  const submitLoginHandler = () => {
    const isEmailValid = validateEmail(props.email, props.setError);
    const isPwValid = validatePw(props.pw, props.setError);
    
    if(isEmailValid && isPwValid) {
      const infoLogin = {
        inputEmail: props.email,
        inputPw: props.pw,
        setError: props.setError,
        hidePopup: props.hidePopup
      }
      
      signInWithEmailAndPassword(infoLogin);
    }
  };
  
  return (
    <>
      <div className={classes.FormTitle}>
        Hello again, wanna get access again to Shoppingify?
      </div>
      
      <LoginForm setEmailInput={props.setEmailInput} setPwInput={props.setPwInput} submit={submitLoginHandler} />
    </>
  );
};

export default LoginDashboard;
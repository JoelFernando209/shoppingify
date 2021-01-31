import React from 'react';
import compose from 'compose-function';

import RegisterForm from './RegisterForm/RegisterForm';

import { validateEmail, validatePw, validateName } from '../../../utils/validation.utils.js';
import { registerWithEmailAndPassword, sendEmailVerification } from '../../../firebase/FirebaseUtils/firebase.auth';

import classes from './RegisterDashboard.module.scss';

const RegisterDashboard = (props) => {
  const submitRegisterHandler = () => {
    const isEmailValid = validateEmail(props.email, props.setError);
    const isPwValid = validatePw(props.pw, props.setError);
    const isUserNameValid = validateName(props.username, props.setError);
    
    if(isEmailValid && isPwValid && isUserNameValid) {
      const infoRegister = {
        inputEmail: props.email,
        inputPw: props.pw,
        inputUsername: props.username,
        setError: props.setError
      }
      
      const registerUserWithEmailMethod = compose(
        sendEmailVerification,
        registerWithEmailAndPassword
      );
      
      registerUserWithEmailMethod(infoRegister)
    }
  };
  
  return (
    <>
      <div className={classes.FormTitle}>
        Join in less than 1 minute to the most advanced shopping list app!
      </div>
      
      <RegisterForm
        setEmailInput={props.setEmailInput}
        setPwInput={props.setPwInput}
        setUsernameInput={props.setUsernameInput}
        submit={submitRegisterHandler}
      />
    </>
  );
};

export default RegisterDashboard;
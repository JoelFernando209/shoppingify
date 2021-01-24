import React, { useState, useContext } from 'react';
import compose from 'compose-function';

import classes from './PopupForm.module.scss';

import PopupContext from '../../../context/PopupContext';

import GoogleAuth from './GoogleAuth/GoogleAuth';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

import { validateEmail, validatePw, validateUsername } from '../../../utils/validation.utils.js';
import { registerWithEmailAndPassword, setUsername, sendEmailVerification, registerWithGoogle, signInWithEmailAndPassword } from '../../../firebase/FirebaseUtils/firebase.auth';

const PopupForm = ({ statusMethod, setError, error }) => {
  const PopupObjContext = useContext(PopupContext);
  
  const [ email, setEmail ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ username, setUsername ] = useState('');
  
  const setEmailInput = event => {
    setEmail(event.target.value)
  }
  
  const setPwInput = event => {
    setPw(event.target.value);
  }
  
  const setUsernameInput = event => {
    setUsername(event.target.value);
  };
  
  const submitRegisterHandler = () => {
    const isEmailValid = validateEmail(email, setError);
    const isPwValid = validatePw(pw, setError);
    const isUserNameValid = validateUsername(username, setError);
    
    if(isEmailValid && isPwValid && isUserNameValid) {
      const infoRegister = {
        inputEmail: email,
        inputPw: pw,
        inputUsername: username,
        setError
      }
      
      const registerUserWithEmailMethod = compose(
        sendEmailVerification,
        registerWithEmailAndPassword
      )(infoRegister);
      
    }
  };
  
  const submitLoginHandler = () => {
    const isEmailValid = validateEmail(email, setError);
    const isPwValid = validatePw(pw, setError);
    
    if(isEmailValid && isPwValid) {
      const infoLogin = {
        inputEmail: email,
        inputPw: pw,
        setError,
        hidePopup: PopupObjContext.hidePopup
      }
      
      signInWithEmailAndPassword(infoLogin);
    }
  };
  
  let errorText = null;
  let errorClass = classes.Error;
  
  if(error) {
    if(error.type === 'success') {
      errorClass = classes.Success;
    }
    
    errorText = <p className={errorClass}>{error.message}</p>
  }
  
  let form = (
    <div className={classes.PopupForm}>
      <div className={classes.FormTitle}>
        Hello again, wanna get access again to Shoppingify?
      </div>
      
      <LoginForm setEmailInput={setEmailInput} setPwInput={setPwInput} submit={submitLoginHandler} />
      
      {errorText}
      
      <GoogleAuth status={statusMethod} authHandler={registerWithGoogle.bind(null, setError, PopupObjContext.hidePopup)} />
    </div>
  );
  
  if(statusMethod === 'register') {
    form = (
      <div className={classes.PopupForm}>
        <div className={classes.FormTitle}>
          Join in less than 1 minute to the most advanced shopping list app!
        </div>
        
        <RegisterForm
          setEmailInput={setEmailInput}
          setPwInput={setPwInput}
          setUsernameInput={setUsernameInput}
          submit={submitRegisterHandler}
        />
        
        {errorText}
        
        <GoogleAuth status={statusMethod} authHandler={registerWithGoogle.bind(null, setError, PopupObjContext.hidePopup)} />
      </div>
    );
  }
  
  return form;
};

export default PopupForm;
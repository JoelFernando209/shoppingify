import React, { useState } from 'react';

import classes from './PopupForm.module.scss';

import LoginDashboard from './LoginDashboard/LoginDashboard';
import RegisterDashboard from './RegisterDashboard/RegisterDashboard';
import GoogleAuth from './GoogleAuth/GoogleAuth';

import { registerWithGoogle } from '../../firebase/FirebaseUtils/firebase.auth';

const PopupForm = ({ statusMethod, setError, error, hidePopup }) => {
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
  
  let errorText = null;
  let errorClass = classes.Error;
    
  if(error) {
    if(error.type === 'success') {
      errorClass = classes.Success;
    }
    
    errorText = <p className={errorClass}>{error.message}</p>
  }
  
  let form = <LoginDashboard
    email={email}
    setEmailInput={setEmailInput}
    pw={pw}
    setPwInput={setPwInput}
    setError={setError}
    hidePopup={hidePopup}
  />;
  
  if(statusMethod === 'register') {
    form = <RegisterDashboard
      email={email}
      setEmailInput={setEmailInput}
      pw={pw}
      setPwInput={setPwInput}
      username={username}
      setUsernameInput={setUsernameInput}
      setError={setError}
    />;
  }
  
  return (
    <div className={classes.PopupForm}>
      {form}
      
      {errorText}
      
      <GoogleAuth status={statusMethod} authHandler={registerWithGoogle.bind(null, setError, hidePopup)} />
    </div>
  );
};

export default PopupForm;
import React, { useState, useEffect } from 'react';

import OpenedEmailIcon from '../../assets/images/opened_email.svg';

import Backdrop from '../UI/Backdrop/Backdrop';
import Button from '../UI/Button/Button';

import classes from './NotEmailAuthPopup.module.scss';

import { openPopupBasedOnEmail, resendEmailVerification } from '../../firebase/FirebaseUtils/firebase.auth';

const NotEmailAuthPopup = () => {
  const [ statusPopup, setStatusPopup ] = useState(false);
  
  useEffect(() => {
    openPopupBasedOnEmail(setStatusPopup);
  }, [])
  
  useEffect(() => {
    console.log('NotEmailAuthPopup render');
  })
  
  return (
    <Backdrop show={statusPopup}>
      <div className={classes.NotEmailPopup}>
        <img src={OpenedEmailIcon} alt='Email has been sended' className={classes.EmailIcon} />
        
        <div className={classes.Title}>
          You are not email authenticated. Please check your email to get access!
        </div>
        
        <Button btnType='orange' clicked={resendEmailVerification}>Resend email</Button>
      </div>
    </Backdrop>
  )
};

export default NotEmailAuthPopup;
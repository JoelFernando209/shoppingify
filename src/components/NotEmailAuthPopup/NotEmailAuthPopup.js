import React, { useState, useEffect } from 'react';

import OpenedEmailIcon from '../../assets/images/opened_email.svg';

import Backdrop from '../UI/Backdrop/Backdrop';
import Button from '../UI/Button/Button';

import classes from './NotEmailAuthPopup.module.scss';

import { openPopupBasedOnEmail, resendEmailVerification } from '../../firebase/FirebaseUtils/firebase.auth';
import { toggleShakeClass } from '../../utils/style.utils';

const NotEmailAuthPopup = () => {
  const [ statusPopup, setStatusPopup ] = useState(false);
  const [ notEmailClasses, setNotEmailClasses ] = useState([classes.NotEmailPopup]);
  
  useEffect(() => {
    openPopupBasedOnEmail(setStatusPopup);
  }, [])
  
  const toggleShakeClassHandler = toggleShakeClass.bind(null, notEmailClasses, setNotEmailClasses, classes.Shake);
  
  return (
    <Backdrop show={statusPopup} clicked={toggleShakeClassHandler}>
      <div className={notEmailClasses.join(' ')}>
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
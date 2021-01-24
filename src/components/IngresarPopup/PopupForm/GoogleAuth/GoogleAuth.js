import React from 'react';

import GoogleIcon from '../../../../assets/images/google-icon.png';

import Button from '../../../UI/Button/Button';

import classes from './GoogleAuth.module.scss';

const GoogleAuth = ({ status, authHandler }) => (
  <Button btnType='transparent' clicked={authHandler}>
    <div className={classes.GoogleButton}>
      <img src={GoogleIcon} alt='Google' className={classes.GoogleIcon} />
      { status === 'login' ? 'Login' : 'Register'} with Google
    </div>
  </Button>
);

export default GoogleAuth;
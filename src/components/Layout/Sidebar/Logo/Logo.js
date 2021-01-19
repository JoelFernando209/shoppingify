import React from 'react';

import LogoIcon from '../../../../assets/images/logo.svg';

import classes from './Logo.module.scss';

const Logo = () => (
  <img src={LogoIcon} className={classes.Logo} alt='Logo' />
);
  
export default Logo
import React from 'react';

import CreateIcon from '../../../assets/images/create-icon.svg';

import classes from './ShoppingHeader.module.scss';

const ShoppingHeader = () => (
  <div className={classes.ShoppingHeader}>
    Shopping list
    
    <img src={CreateIcon} alt='Edit Shopping List' className={classes.CreateIcon} />
  </div>
);

export default ShoppingHeader;
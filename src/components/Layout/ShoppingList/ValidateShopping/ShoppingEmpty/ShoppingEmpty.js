import React from 'react';

import PersonCart from '../../../../../assets/images/person-cart.svg';

import classes from './ShoppingEmpty.module.scss';

const ShoppingEmpty = () => (
  <div className={classes.ShoppingEmpty}>
    <img src={PersonCart} alt='Person Cart' />
    
    <div>The shopping list is empty</div>
  </div>
);

export default ShoppingEmpty;
import React from 'react';

import classes from './ShoppingItemNormal.module.scss';

const ShoppingItemNormal = ({ pieces, clicked }) => (
  <div className={classes.ShoppingItemCount} onClick={clicked}>
    {pieces} pcs
  </div>
);

export default ShoppingItemNormal;
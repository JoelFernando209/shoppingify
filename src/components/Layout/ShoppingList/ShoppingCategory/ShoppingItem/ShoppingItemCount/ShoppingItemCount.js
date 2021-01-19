import React from 'react';

import classes from './ShoppingItemCount.module.scss';

const ShoppingItemCount = ({ pieces }) => {
  
  return (
    <div className={classes.ShoppingItemCount}>
      {pieces} pcs
    </div>
  )
}

export default ShoppingItemCount;
import React from 'react';

import ShoppingItemCount from './ShoppingItemCount/ShoppingItemCount';

import classes from './ShoppingItem.module.scss';

const ShoppingItem = ({ id, value, pieces }) => {
  
  const idInput = `sh-item-${id}`;
  
  return (
    <div className={classes.ShoppingItem}>
      <label className={classes.ShoppingItemLabel} htmlFor={idInput}>
        <input type='checkbox' id={idInput} className={classes.Checkbox} />
        
        <div className={classes.ValueItem}>{value}</div>
      </label>
      
      <div className={classes.ShoppingItemCount}>
        <ShoppingItemCount pieces={pieces} />
      </div>
    </div>
  )
}

export default ShoppingItem;
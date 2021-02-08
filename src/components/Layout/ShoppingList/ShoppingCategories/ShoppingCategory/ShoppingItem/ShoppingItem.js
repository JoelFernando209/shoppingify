import React from 'react';

import ShoppingItemCount from '../../../../../../containers/Layout/ShoppingItemCount/ShoppingItemCount';

import classes from './ShoppingItem.module.scss';

const ShoppingItem = ({ id, value, pieces, deleteItemHandler }) => {
  
  const idInput = `sh-item-${id}`;
  
  return (
    <div className={classes.ShoppingItem}>
      <label className={classes.ShoppingItemLabel} htmlFor={idInput}>
        <input type='checkbox' id={idInput} className={classes.Checkbox} />
        
        <div className={classes.ValueItem}>{value}</div>
      </label>

      <ShoppingItemCount pieces={pieces} idItem={id} deleteItemHandler={deleteItemHandler} />
    </div>
  )
}

export default ShoppingItem;
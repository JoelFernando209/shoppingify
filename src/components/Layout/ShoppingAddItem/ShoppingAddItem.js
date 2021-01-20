import React, { useEffect } from 'react';

import ShoppingAddForm from './ShoppingAddForm/ShoppingAddForm';
import ShoppingAddControls from './ShoppingAddControls/ShoppingAddControls';

import classes from './ShoppingAddItem.module.scss';

const ShoppingAddItem = ({ status, toggleItemStatus }) => {
  useEffect(() => {
    console.log('[ShoppingAddItem.js] renderized')
  })
  
  let styleAdd = {
    width: '0',
    visibility: 'hidden',
    opacity: '0'
  };
  
  if(status) {
    styleAdd = {
      width: '32rem',
      visibility: 'visible',
      opacity: '1'
    };
  }
  
  return (
    <div className={classes.ShoppingAddItem} style={styleAdd}>
      <h2 className={classes.TitleAdd}>Add a new item</h2>
      
      <ShoppingAddForm />
      
      <ShoppingAddControls clickedCancel={toggleItemStatus} />
    </div>
  )
};

export default ShoppingAddItem;
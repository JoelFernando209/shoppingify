import React from 'react';

import classes from './ShoppingCategory.module.scss';

import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingCategory = ({ title, arrItem }) => {
  const shoppingItems = arrItem.map(item => {
    return <ShoppingItem key={item.id} id={item.id} value={item.nameItem} pieces={item.pieces} />
  })
  
  return (
    <div className={classes.Category}>
      <span className={classes.Title}>{title}</span>
      
      {shoppingItems}
    </div>
  )
}

export default ShoppingCategory;
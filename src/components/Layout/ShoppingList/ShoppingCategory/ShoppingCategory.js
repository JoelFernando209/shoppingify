import React from 'react';

import classes from './ShoppingCategory.module.scss';

import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingCategory = ({ title, generateNewId, arrItem }) => {
  const shoppingItems = arrItem.map(item => {
    const idItem = generateNewId();
    
    return <ShoppingItem key={idItem} id={idItem} value={item.name} />
  })
  
  return (
    <div className={classes.Category}>
      <span className={classes.Title}>{title}</span>
      
      {shoppingItems}
    </div>
  )
}

export default ShoppingCategory;
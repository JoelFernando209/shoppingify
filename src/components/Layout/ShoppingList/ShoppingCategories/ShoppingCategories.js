import React from 'react';

import ShoppingCategory from './ShoppingCategory/ShoppingCategory';

import classes from './ShoppingCategories.module.scss';

const ShoppingCategories = ({ itemNames, items, onActivateEmptyList, onDesactivateEmptyList }) => {
  const categories = itemNames.map(itemName => {
    const arrItems = items[itemName].items;
    
    if(arrItems.length > 0) {
      return (
        <ShoppingCategory
          key={items[itemName].id}
          title={items[itemName].categoryItem}
          arrItem={arrItems}
        />
      )
    }
  })
  
  return (
    <div className={classes.Categories}>
      {categories}
    </div>
  )
};

export default ShoppingCategories;
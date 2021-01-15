import React from 'react';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import ShoppingCategory from './ShoppingCategory/ShoppingCategory';

const shoppingList = () => {
  const createId = () => {
    let currentId = 0;
    
    return () => {
      currentId++;
      return currentId;
    }
  };
  
  const generateNewId = createId();
  
  return (
    <div className={classes.ShoppingList}>
      <PopupAddItem />
      
      <ShoppingHeader />
      
      <div className={classes.Categories}>
        <ShoppingCategory title='Fruit and Vegetables' generateNewId={generateNewId}/>
        <ShoppingCategory title='Fruit and Vegetables' generateNewId={generateNewId}/>
      </div>
    </div>
  )
};

export default shoppingList;
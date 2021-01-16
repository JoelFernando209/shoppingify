import React from 'react';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import ShoppingCategory from './ShoppingCategory/ShoppingCategory';
import AddListName from './AddListName/AddListName';

const shoppingList = () => {
  const createId = () => {
    let currentId = 0;
    
    return () => {
      currentId++;
      return currentId;
    }
  };
  
  const generateNewId = createId();
  
  const shoppingCategories = (
    <div className={classes.Categories}>
        <ShoppingCategory
          title='Fruit and Vegetables'
          generateNewId={generateNewId}
          arrItem={[
            {
              name: 'Avocato'
            },
            {
              name: 'Orange'
            },
            {
              name: 'Apples'
            }
          ]} />
        <ShoppingCategory
          title='Fruit and Vegetables'
          generateNewId={generateNewId}
          arrItem={[
            {
              name: 'Avocato'
            },
            {
              name: 'Orange'
            },
            {
              name: 'Apples'
            }
          ]} />
        <ShoppingCategory
          title='Fruit and Vegetables'
          generateNewId={generateNewId}
          arrItem={[
            {
              name: 'Avocato'
            },
            {
              name: 'Orange'
            },
            {
              name: 'Apples'
            }
          ]} />
      </div>
  );
  
  return (
    <div className={classes.ShoppingList}>
      <PopupAddItem />
      
      <ShoppingHeader />
      
      {shoppingCategories}
      
      <AddListName />
    </div>
  )
};

export default shoppingList;
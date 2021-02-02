import React from 'react';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import ShoppingCategory from './ShoppingCategory/ShoppingCategory';
import AddListName from './AddListName/AddListName';
import ShoppingAddItem from '../../../containers/ShoppingAddItem/ShoppingAddItem';

const shoppingList = ({ addItemState, toggleItemStatus, statusShopping }) => {
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
  
  const classesShopping = [classes.ShoppingList]
  
  if(statusShopping) {
    classesShopping.push(classes.PhoneActive);
  } else {
    classesShopping.push(classes.PhoneInactive);
  }
  
  return (
    <>
      <div className={classesShopping.join(' ')}>
        <PopupAddItem clicked={toggleItemStatus} />
        
        <ShoppingHeader />
        
        {shoppingCategories}
        
        <AddListName />
      </div>
      
      <ShoppingAddItem status={addItemState} toggleItemStatus={toggleItemStatus} />
    </>
  );
};

export default shoppingList;
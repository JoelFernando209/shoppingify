import React, { useState } from 'react';

import classes from './Layout.module.scss';

import ShoppingList from '../../components/Layout/ShoppingList/ShoppingList';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import IngresarPopup from '../../components/IngresarPopup/IngresarPopup';
import NotEmailAuthPopup from '../../components/NotEmailAuthPopup/NotEmailAuthPopup';

const Layout = ({
    children,
    popupStatus,
    changePopupStatus
  }) => {

  const [ addItemStatus, setAddItemStatus ] = useState(false);
  const [ authErr, setAuthErr ] = useState(null);
  const [ shoppingListPhone, setShoppingListPhone ] = useState(false);
  
  const toggleItemStatusHandler = () => {
    setAddItemStatus(!addItemStatus);
  }
  
  const toggleShoppingListPhone = () => {
    setShoppingListPhone(!shoppingListPhone);
  };
  
  return (
    <>
      <NotEmailAuthPopup />
      
      <IngresarPopup
        error={authErr}
        setError={setAuthErr}
      />
        
      <Sidebar toggleShopping={toggleShoppingListPhone} />
      
      <div className={classes.childrenParent}>
        {children}
      </div>
      
      <ShoppingList
        addItemState={addItemStatus}
        statusShopping={shoppingListPhone}
        toggleItemStatus={toggleItemStatusHandler}
      />
    </>
  )
};

export default Layout;
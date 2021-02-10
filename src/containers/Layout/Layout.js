import React, { useState } from 'react';

import classes from './Layout.module.scss';

import ShoppingList from '../../components/Layout/ShoppingList/ShoppingList';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import IngresarPopup from '../../components/IngresarPopup/IngresarPopup';
import NotEmailAuthPopup from '../../components/NotEmailAuthPopup/NotEmailAuthPopup';
import ShoppingAddItem from '../../containers/ShoppingList/ShoppingAddItem/ShoppingAddItem';
import InfoItem from '../../components/Layout/InfoItem/InfoItem';

const Layout = ({ children, infoItemStatus, hideInfoItem, currentInfoItem }) => {
  const [ addItemStatus, setAddItemStatus ] = useState(false);
  const [ authErr, setAuthErr ] = useState(null);
  const [ shoppingListPhone, setShoppingListPhone ] = useState(false);
  const [ editionMode, setEditionMode ] = useState(false);
  
  const toggleItemStatusHandler = () => {
    setAddItemStatus(!addItemStatus);
  }
  
  const toggleShoppingListPhone = () => {
    setShoppingListPhone(!shoppingListPhone);
  };
  
  const toggleEditionMode = () => {
    setEditionMode(!editionMode);
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
        statusShopping={shoppingListPhone}
        toggleItemStatus={toggleItemStatusHandler}
        editionMode={editionMode}
        toggleEditionMode={toggleEditionMode}
      />
      
      <ShoppingAddItem status={addItemStatus} toggleItemStatus={toggleItemStatusHandler} />
      
      <InfoItem status={infoItemStatus} hideInfoItemHandler={hideInfoItem} currentInfoItem={currentInfoItem} />
    </>
  )
};

export default Layout;
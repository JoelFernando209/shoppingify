import React, { useState, useContext } from 'react';

import PopupContext from '../../context/PopupContext';

import ShoppingList from '../../components/Layout/ShoppingList/ShoppingList';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import IngresarPopup from '../../components/IngresarPopup/IngresarPopup';

import classes from './Layout.module.css';

const Layout = ({ children, popupStatus, changePopupStatus }) => {
  const PopupObjContext = useContext(PopupContext);
  
  const [ addItemStatus, setAddItemStatus ] = useState(false);
  
  const toggleItemStatusHandler = () => {
    setAddItemStatus(!addItemStatus);
  }
  
  return (
    <>
      <IngresarPopup status={PopupObjContext.popupStatus} close={PopupObjContext.hidePopup} />
      <Sidebar />
      <div className={classes.childrenParent}>
        {children}
      </div>
      <ShoppingList addItemState={addItemStatus} toggleItemStatus={toggleItemStatusHandler} />
    </>
  )
};

export default Layout;
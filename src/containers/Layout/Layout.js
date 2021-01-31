import React, { useState } from 'react';

import classes from './Layout.module.css';

import ShoppingList from '../../components/Layout/ShoppingList/ShoppingList';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import IngresarPopup from '../../components/IngresarPopup/IngresarPopup';

const Layout = ({
    children,
    popupStatus,
    changePopupStatus
  }) => {

  const [ addItemStatus, setAddItemStatus ] = useState(false);
  const [ authErr, setAuthErr ] = useState(null);
  
  const toggleItemStatusHandler = () => {
    setAddItemStatus(!addItemStatus);
  }
  
  return (
    <>
      <IngresarPopup
        error={authErr}
        setError={setAuthErr}
      />
        
      <Sidebar />
      
      <div className={classes.childrenParent}>
        {children}
      </div>
      <ShoppingList addItemState={addItemStatus} toggleItemStatus={toggleItemStatusHandler} />
    </>
  )
};

export default Layout;
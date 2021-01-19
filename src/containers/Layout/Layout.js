import React, { useState } from 'react';

import ShoppingList from '../../components/Layout/ShoppingList/ShoppingList';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
  const [ addItemStatus, setAddItemStatus ] = useState(false);
  
  const toggleItemStatusHandler = () => {
    setAddItemStatus(!addItemStatus);
  }
  
  return (
    <>
      <Sidebar />
      <div className={classes.childrenParent}>
        {children}
      </div>
      <ShoppingList addItemState={addItemStatus} toggleItemStatus={toggleItemStatusHandler} />
    </>
  )
};

export default Layout;
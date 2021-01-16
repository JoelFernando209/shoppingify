import React from 'react';

import ShoppingList from '../../components/ShoppingList/ShoppingList';
import Sidebar from '../../components/Sidebar/Sidebar';

import classes from './Layout.module.css';

const layout = ({ children }) => {
  
  
  return (
    <>
      <Sidebar />
      <div className={classes.childrenParent}>
        {children}
      </div>
      <ShoppingList />
    </>
  )
};

export default layout;
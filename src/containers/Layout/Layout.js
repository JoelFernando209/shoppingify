import React from 'react';

import ShoppingList from '../../components/ShoppingList/ShoppingList';
import Sidebar from '../../components/Sidebar/Sidebar';

const layout = ({ children }) => {
  
  
  return (
    <>
      <Sidebar />
      <ShoppingList />
    </>
  )
};

export default layout;
import React from 'react';

import ItemsDashboard from './ItemsDashboard/ItemsDashboard';
import Header from '../../../../components/UI/Header/Header';

const ItemsPage = ({ products }) => {
  
  return (
    <>
      <Header />
      <ItemsDashboard itemsProduct={products} />
    </>
  )
};

export default ItemsPage;
import React from 'react';

import ItemsCategory from './ItemsCategory/ItemsCategory';

const ItemsDashboard = ({ itemsProduct }) => {
  const itemsCategories = itemsProduct.map(product => {
    return <ItemsCategory key={product.id} titleCategory={product.categoryItem} arrItems={[{ id: product.id, title: product.nameItem }]} />
  })
  
  return (
    <>
      {itemsCategories}
    </>
  );
};

export default ItemsDashboard;
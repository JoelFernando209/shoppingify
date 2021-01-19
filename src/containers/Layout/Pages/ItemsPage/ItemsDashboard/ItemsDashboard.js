import React from 'react';

import ItemsCategory from './ItemsCategory/ItemsCategory';

const ItemsDashboard = ({ itemsProduct }) => {
  const itemsCategories = itemsProduct.map(product => {
    return <ItemsCategory key={product.id} titleCategory={product.categoryTitle} arrItems={product.itemsProduct} />
  })
  
  return (
    <>
      {itemsCategories}
    </>
  );
};

export default ItemsDashboard;
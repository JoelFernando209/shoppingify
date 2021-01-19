import React from 'react';

import ItemsProduct from './ItemsProduct/ItemsProduct';

import classes from './ItemsCategory.module.scss';

const ItemsCategory = ({ titleCategory, arrItems }) => {
  
  const itemsProducts = arrItems.map(item => {
    return <ItemsProduct key={item.id} nameProduct={item.title} />
  })
  
  return (
    <div className={classes.ItemsCategory}>
      <div className={classes.titleCategory}>{titleCategory}</div>
      
      <div className={classes.ItemsProducts}>
        {itemsProducts}
      </div>
    </div>
  )
};

export default ItemsCategory;
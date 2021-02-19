import React from 'react';

import classes from './ItemsProduct.module.scss';

const ItemsProduct = ({ nameProduct, clicked }) => {
  return (
    <div className={classes.ItemsProduct} onClick={clicked}>
      {nameProduct}
    </div>
  )
};

export default ItemsProduct;
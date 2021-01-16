import React from 'react';

import AddIcon from '../../../../../assets/images/add-icon.svg';

import classes from './ItemsProduct.module.scss';

const ItemsProduct = ({ nameProduct }) => {
  
  return (
    <div className={classes.ItemsProduct}>
      {nameProduct}
      <img src={AddIcon} alt='Add' className={classes.AddIcon} />
    </div>
  )
};

export default ItemsProduct;
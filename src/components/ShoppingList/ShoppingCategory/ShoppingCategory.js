import React from 'react';

import classes from './ShoppingCategory.module.scss';

import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingCategory = ({ title, generateNewId }) => (
  <div className={classes.Category}>
    <span className={classes.Title}>{title}</span>
    
    <ShoppingItem id={generateNewId()} value='Avocato' />
    <ShoppingItem id={generateNewId()} value='Avocato' />
  </div>
)

export default ShoppingCategory;
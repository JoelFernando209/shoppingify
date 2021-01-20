import React from 'react';

import Button from '../../../UI/Button/Button';

import classes from './ShoppingAddControls.module.scss';

const ShoppingAddControls = ({ clickedCancel }) => (
  <div className={classes.ParentButtons}>
    <Button btnType='transparent' clicked={clickedCancel}>Cancel</Button>
    <Button btnType='orange'>Save</Button>
  </div>
);

export default ShoppingAddControls;
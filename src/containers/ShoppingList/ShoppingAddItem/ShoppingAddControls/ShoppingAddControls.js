import React from 'react';

import Button from '../../../../components/UI/Button/Button';

import classes from './ShoppingAddControls.module.scss';

const ShoppingAddControls = ({ clickedCancel, submit }) => (
  <div className={classes.ParentButtons}>
    <Button btnType='transparent' clicked={clickedCancel}>Cancel</Button>
    <Button btnType='orange' clicked={submit}>Save</Button>
  </div>
);

export default ShoppingAddControls;
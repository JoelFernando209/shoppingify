import React from 'react';

import BottleIcon from '../../../../assets/images/bottle-icon.svg';
import Button from '../../../UI/Button/Button';

import classes from './PopupAddItem.module.scss';

const popupAddItem = ({ clicked }) => (
  <div className={classes.PopupAddItem}>
    <img src={BottleIcon} alt='Add Shopping Item!' className={classes.BottleIcon} />
    <div className={classes.PopupControls}>
      <span>Don't find what you need?</span>
      
      <Button btnType='white' clicked={clicked}>Add item</Button>
    </div>
  </div>
);

export default popupAddItem;
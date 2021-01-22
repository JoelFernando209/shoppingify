import React from 'react';

import Backdrop from '../UI/Backdrop/Backdrop';
import ChangeMethod from './ChangeMethod/ChangeMethod';

import classes from './IngresarPopup.module.scss';

const IngresarPopup = ({ status, close }) => {
  
  return (
    <Backdrop show={status} clicked={close}>
      <div className={classes.IngresarPopup}>
        <ChangeMethod />
        
        
      </div>
    </Backdrop>
  );
};

export default IngresarPopup;
import React from 'react';

import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Button from '../../../components/UI/Button/Button';

import classes from './ConfirmPopup.module.scss';

const ConfirmPopup = ({ warning, status, desactivate, onConfirm }) => (
  <Backdrop show={status} clicked={desactivate}>
    <div className={classes.ConfirmPopup}>
      <div className={classes.CancelIcon} onClick={desactivate}>X</div>
    
      <div className={classes.Warning}>{warning}</div>
      
      <div className={classes.Buttons}>
        <Button btnType='white' clicked={desactivate}>cancel</Button>
        <Button btnType='danger' clicked={() => {
          onConfirm();
          desactivate();
        }}>Yes</Button>
      </div>
    </div>
  </Backdrop>
);

export default ConfirmPopup;
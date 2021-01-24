import React from 'react';

import Backdrop from '../UI/Backdrop/Backdrop';
import ChangeMethod from './ChangeMethod/ChangeMethod';
import PopupForm from './PopupForm/PopupForm';

import classes from './IngresarPopup.module.scss';

const IngresarPopup = ({
  status,
  close,
  popupModeStatus,
  changePopupModeStatus,
  error,
  setError
}) => {
  
  return (
    <Backdrop show={status} clicked={close}>
      <div className={classes.IngresarPopup}>
        <ChangeMethod statusMethod={popupModeStatus} changeStatus={changePopupModeStatus}  />
        
        <PopupForm statusMethod={popupModeStatus} error={error} setError={setError} />
      </div>
    </Backdrop>
  );
};

export default IngresarPopup;
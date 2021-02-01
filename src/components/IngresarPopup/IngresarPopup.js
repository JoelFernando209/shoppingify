import React, { useState } from 'react';
import { connect } from 'react-redux';

import Backdrop from '../UI/Backdrop/Backdrop';
import ChangeMethod from './ChangeMethod/ChangeMethod';
import PopupForm from '../../containers/PopupForm/PopupForm';

import classes from './IngresarPopup.module.scss';

import * as actions from '../../store/actions/index';
import { toggleShakeClass } from '../../utils/style.utils';

const IngresarPopup = ({
  status,
  onCloseHandler,
  popupModeStatus,
  changePopupModeStatus,
  error,
  setError
}) => {
  const [ loginRegisterStatus, setLoginRegisterStatus ] = useState('register');
  const [ notEmailClasses, setNotEmailClasses ] = useState([classes.IngresarPopup]);

  const toggleShakeClassHandler = toggleShakeClass.bind(null, notEmailClasses, setNotEmailClasses, classes.Shake);
  
  return (
    <Backdrop show={status} clicked={toggleShakeClassHandler}>
      <div className={notEmailClasses.join(' ')}>
        <ChangeMethod statusMethod={loginRegisterStatus} changeStatus={setLoginRegisterStatus}  />
        
        <PopupForm statusMethod={loginRegisterStatus} hidePopup={onCloseHandler} error={error} setError={setError} />
      </div>
    </Backdrop>
  );
};

const mapStateToProps = state => ({
  status: state.log.popupStatus
});

const mapDispatchToProps = dispatch => ({
  onCloseHandler: () => dispatch(actions.hideLogPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(IngresarPopup);
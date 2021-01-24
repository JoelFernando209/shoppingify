import React from 'react';

import classes from './ChangeMethod.module.scss';

const ChangeMethod = ({ statusMethod, changeStatus }) => {
  let classesLogin = [classes.Method];
  let classesRegister = [classes.Method];
  
  switch (statusMethod) {
    case 'login':
      classesLogin.push(classes.activeMethod);
    break;
    case 'register':
      classesRegister.push(classes.activeMethod);
    break;
    default:
      return null
  }
  
  return (
    <div className={classes.ChangeMethod}>
      <div className={classesLogin.join(' ')} onClick={changeStatus.bind(null, 'login')}>
        Login
      </div>
      
      <div className={classesRegister.join(' ')} onClick={changeStatus.bind(null, 'register')}>
        Register
      </div>
    </div>
  );
};

export default ChangeMethod;
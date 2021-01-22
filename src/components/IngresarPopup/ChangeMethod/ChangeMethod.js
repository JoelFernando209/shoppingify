import React from 'react';

import classes from './ChangeMethod.module.scss';

const ChangeMethod = () => {
  
  return (
    <div className={classes.ChangeMethod}>
      <div className={classes.Method}>
        Login
      </div>
      
      <div className={classes.Method}>
        Register
      </div>
    </div>
  );
};

export default ChangeMethod;
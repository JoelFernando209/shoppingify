import React from 'react';

import classes from './InputInfo.module.scss';

const InputInfo = ({ title, value }) => (
  <div className={classes.InputInfo}>
    <div className={classes.InputTitle}>{title}</div>
    
    <div className={classes.InputValue}>{value}</div>
  </div>
);

export default InputInfo;
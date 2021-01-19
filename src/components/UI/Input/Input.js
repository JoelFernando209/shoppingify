import React from 'react';

import classes from './Input.module.scss';

const Input = ({ label, placeholder, type }) => (
  <label className={classes.LabelInput}>
    <input type={type} placeholder={placeholder} className={classes.Input} />
    
    <div className={classes.TitleLabel}>{label}</div>
  </label>
)

export default Input;
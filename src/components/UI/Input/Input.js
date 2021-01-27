import React from 'react';

import classes from './Input.module.scss';

const Input = ({ label, placeholder, type, change, valueD }) => {
  
  return (
    <label className={classes.LabelInput}>
      <input type={type} placeholder={placeholder} className={classes.Input} onChange={change} value={valueD} />
      
      <div className={classes.TitleLabel}>{label}</div>
    </label>
  )
}

export default Input;
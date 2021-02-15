import React from 'react';

import classes from './Button.module.scss';

const button = ({ children, btnType, clicked, style = {}, disabled }) => (
  <button
    className={[classes.Btn, classes[btnType]].join(' ')}
    style={style}
    onClick={clicked}
    disabled={!!disabled}
  >
    {children}
  </button>
);

export default button;
import React from 'react';

import classes from './Button.module.scss';

const button = ({ children, btnType, clicked, style = {} }) => (
  <button
    className={[classes.Btn, classes[btnType]].join(' ')}
    style={style}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
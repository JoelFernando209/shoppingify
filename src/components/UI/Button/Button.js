import React from 'react';

import classes from './Button.module.scss';

const button = ({ children, btnType }) => (
  <button className={[classes.Btn, classes[btnType]].join(' ')}>{children}</button>
);

export default button;
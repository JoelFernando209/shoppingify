import React from 'react';

import classes from './Button.module.scss';

const button = ({ children, btnType, clicked }) => (
  <button className={[classes.Btn, classes[btnType]].join(' ')} onClick={clicked}>{children}</button>
);

export default button;
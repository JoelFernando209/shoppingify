import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = ({ children, clicked, show }) => {
  let styleBackdrop = {
    opacity: '0',
    visibility: 'hidden'
  };
  
  if(show) {
    styleBackdrop = {
      opacity: '1',
      visibility: 'visible'
    }
  }
  
  return (
    <div className={classes.Backdrop} onClick={clicked} style={styleBackdrop}>
      {children}
    </div>
  );;
};

export default Backdrop;
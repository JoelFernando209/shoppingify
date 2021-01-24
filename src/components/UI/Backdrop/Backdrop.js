import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = ({ children, clicked, show }) => {
  let styleBackdrop = {
    position: 'relative',
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
    <div style={styleBackdrop} className={classes.BackdropParent}>
      <div className={classes.Backdrop} onClick={clicked}></div>
      {children}
    </div >
  );;
};

export default Backdrop;
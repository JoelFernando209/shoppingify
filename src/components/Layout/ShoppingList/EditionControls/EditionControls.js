import React from 'react';

import classes from './EditionControls.module.scss';

import Button from '../../../UI/Button/Button';

const EditionControls = ({ statusEdition }) => {
  let style = {};
  
  if(statusEdition) {
    style = {
      width: '100%',
      visibility: 'visible',
      opacity: '1'
    }
  }
  
  return (
    <div className={classes.EditionControls} style={style}>
      <Button btnType='white'>cancel</Button>
      
      <Button btnType='cyan'>complete</Button>
    </div>
  )
};

export default EditionControls
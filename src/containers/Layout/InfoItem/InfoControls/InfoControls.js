import React from 'react';

import Button from '../../../../components/UI/Button/Button';

import classes from './InfoControls.module.scss';

const InfoControls = ({ clickedAdd, clickedDelete, deleteStatus }) => {
  return (
    <div className={classes.InfoControls}>
      { deleteStatus && <Button btnType='transparent' clicked={clickedDelete}>delete</Button>}
      
      <Button btnType='orange' clicked={clickedAdd}>Add to list</Button>
    </div>
  )
};

export default InfoControls;
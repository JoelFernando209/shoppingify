import React from 'react';

import Input from '../../UI/Input/Input';

import classes from './ShoppingAddItem.module.scss';

const ShoppingAddItem = ({ status }) => {
  let styleAdd = {
    width: '0',
    visibility: 'hidden'
  };
  
  if(status) {
    styleAdd = {
      width: '32rem',
      visibility: 'visible'
    };
  }
  
  return (
    <div className={classes.ShoppingAddItem} style={styleAdd}>
      <h2 className={classes.TitleAdd}>Add a new item</h2>
      
      <form className={classes.FormInput}>
        <Input label='Name' placeholder='Enter a name...' type='text' />
        
        <label className={classes.LabelInput}>
          <div className={classes.TitleLabel}>Note (optional)</div>
          
          <textarea placeholder='Enter a note...' className={classes.InputAdd} style={{ resize: 'none' }}></textarea>
        </label>
        
        <Input label='Image (optional)' placeholder='Enter a url...' type='text' />
        
        <Input label='Category' placeholder='Enter a category...' type='text' />
      </form>
    </div>
  )
};

export default ShoppingAddItem;
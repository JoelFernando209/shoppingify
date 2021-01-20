import React from 'react';

import Input from '../../../UI/Input/Input';

import classes from './ShoppingAddForm.module.scss';

const ShoppingAddForm = ({ style }) => {
  
  return (
    <form className={classes.FormInput}>
      <Input label='Name' placeholder='Enter a name...' type='text' />
      
      <label className={classes.LabelInput}>
        <textarea placeholder='Enter a note...' className={[classes.InputAdd, classes.Textarea].join(' ')} style={{ resize: 'none' }}></textarea>
        
        <div className={classes.TitleLabel}>Note (optional)</div>
      </label>
      
      <Input label='Image (optional)' placeholder='Enter a url...' type='text' />
      
      <label className={classes.LabelInput}>
        <select name='category' className={classes.InputAdd}>
          <option>Fruit and Vegetables</option>
          <option>Meat and Fish</option>
        </select>
        
        <div className={classes.TitleLabel}>Category</div>
      </label>
    </form>
  );
};

export default ShoppingAddForm;
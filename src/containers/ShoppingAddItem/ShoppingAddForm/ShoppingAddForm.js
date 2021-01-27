import React from 'react';

import Input from '../../../components/UI/Input/Input';

import classes from './ShoppingAddForm.module.scss';

const ShoppingAddForm = ({ style, setName, setNote, setImage, setCategory, name, note, image, category }) => {
  
  return (
    <form className={classes.FormInput}>
      <Input label='Name' placeholder='Enter a name...' type='text' change={setName} valueD={name} />
      
      <label className={classes.LabelInput}>
        <textarea
          placeholder='Enter a note...'
          className={[classes.InputAdd, classes.Textarea].join(' ')}
          style={{ resize: 'none' }}
          onChange={setNote}
          value={note}
        ></textarea>
        
        <div className={classes.TitleLabel}>Note (optional)</div>
      </label>
      
      <Input label='Image (optional)' change={setImage} valueD={image} placeholder='Enter a url...' type='text' />
      
      <label className={classes.LabelInput}>
        <select onChange={setCategory} value={category} name='category' className={classes.InputAdd}>
          <option></option>
          <option>Fruit and Vegetables</option>
          <option>Meat and Fish</option>
        </select>
        
        <div className={classes.TitleLabel}>Category</div>
      </label>
    </form>
  );
};

export default ShoppingAddForm;
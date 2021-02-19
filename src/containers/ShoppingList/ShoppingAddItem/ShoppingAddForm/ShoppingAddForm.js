import React, { useRef } from 'react';
import { connect } from 'react-redux';

import Input from '../../../../components/UI/Input/Input';

import classes from './ShoppingAddForm.module.scss';

const ShoppingAddForm = ({ style, setName, setNote, setImage, setCategory, name, note, image, category, products }) => {
  const inputTextCategoryRef = useRef(null);
  
  const onFocusTextCategory = () => {
    inputTextCategoryRef.current.style.opacity = '1';
  };
  
  const setCategorySelect = event => {
    setCategory(event);
    
    inputTextCategoryRef.current.style.opacity = '0';
    inputTextCategoryRef.current.value = '';
  };
  
  const onChangeCategory = event => {
    if(event.target.value.trim().length > 0) {
      setCategory(event)
    }
  };
  
  const categoriesNames = Object.keys(products);
  
  const categories = categoriesNames.map(name => <option key={name}>{name}</option>)
  
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
        <input
          type='text'
          onFocus={onFocusTextCategory}
          onChange={onChangeCategory}
          className={classes.SetCategoryInput}
          ref={inputTextCategoryRef}
          value={category}
        />
        
        <select
          onChange={setCategorySelect}
          value={category}
          name='category'
          className={classes.InputAdd}
        >
          <option></option>
          {categories}
        </select>
        
        <div className={classes.TitleLabel}>Category</div>
      </label>
    </form>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ShoppingAddForm);
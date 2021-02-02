import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ShoppingAddForm from './ShoppingAddForm/ShoppingAddForm';
import ShoppingAddControls from './ShoppingAddControls/ShoppingAddControls';

import classes from './ShoppingAddItem.module.scss';

import { validateName, validateCategory } from '../../utils/validation.utils';

import * as actions from '../../store/actions/index';

const ShoppingAddItem = ({ status, toggleItemStatus, onSetProduct }) => {
  const [ nameItem, setNameItem ] = useState('');
  const [ noteItem, setNoteItem ] = useState('');
  const [ imageURL, setImageURL ] = useState('');
  const [ categoryItem, setCategoryItem ] = useState('');
  
  const [ addError, setAddError ] = useState(null);
  
  const setName = event => {
    setNameItem(event.target.value);
  }
  
  const setNote = event => {
    setNoteItem(event.target.value);
  }
  
  const setImage = event => {
    setImageURL(event.target.value);
  }
  
  const setCategory = event => {
    setCategoryItem(event.target.value);
  }
  
  const submitAddItem = () => {
    const isNameValid = validateName(nameItem, setAddError);
    const isCategoryValid = validateCategory(categoryItem, setAddError);
    
    if(isNameValid && isCategoryValid) {
      const itemInfo = {
        dataDoc: {
          nameItem,
          noteItem,
          imageURL,
          categoryItem
        },
        setError: setAddError
      };
      
      onSetProduct(itemInfo);
    }
  };
  
  useEffect(() => {
    console.log('[ShoppingAddItem.js] renderized')
  })
  
  
  const classesAdd = [classes.ShoppingAddItem];
  
  if(status) {
    classesAdd.push(classes.StyleActive);
  } else {
    classesAdd.push(classes.StyleInactive);
  };
  
  let styleError = classes.Error;
  
  if(addError && addError.type === 'success') {
    styleError = classes.Success;
  }
  
  return (
    <div className={classesAdd.join(' ')}>
      <h2 className={classes.TitleAdd}>Add a new item</h2>
      
      <ShoppingAddForm
        setName={setName}
        setNote={setNote}
        setImage={setImage}
        setCategory={setCategory}
        name={nameItem}
        note={noteItem}
        image={imageURL}
        category={categoryItem}
      />
      
      { addError && <p className={styleError}>{addError.message}</p>}
      
      <ShoppingAddControls clickedCancel={toggleItemStatus} submit={submitAddItem} />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onSetProduct: product => dispatch(actions.setProduct(product))
});

export default connect(null, mapDispatchToProps)(ShoppingAddItem);
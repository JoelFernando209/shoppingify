import React, { useEffect, useState } from 'react';

import ShoppingAddForm from './ShoppingAddForm/ShoppingAddForm';
import ShoppingAddControls from './ShoppingAddControls/ShoppingAddControls';

import classes from './ShoppingAddItem.module.scss';

import { validateName, validateCategory } from '../../utils/validation.utils';
import { addItem } from '../../firebase/FirebaseUtils/firebase.firestore';

const ShoppingAddItem = ({ status, toggleItemStatus }) => {
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
    console.log(categoryItem);
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
      
      addItem(itemInfo);
    }
  };
  
  useEffect(() => {
    console.log('[ShoppingAddItem.js] renderized')
  })
  
  let styleAdd = {
    width: '0',
    visibility: 'hidden',
    opacity: '0'
  };
  
  if(status) {
    styleAdd = {
      width: '32rem',
      visibility: 'visible',
      opacity: '1'
    };
  }
  
  let styleError = classes.Error;
  
  if(addError && addError.type === 'success') {
    styleError = classes.Success;
  }
  
  return (
    <div className={classes.ShoppingAddItem} style={styleAdd}>
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

export default ShoppingAddItem;
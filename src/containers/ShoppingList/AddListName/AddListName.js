import React, { useState } from 'react';
import { connect } from 'react-redux';

import { validateName } from '../../../utils/validation.utils';

import classes from './AddListName.module.scss';

import * as actions from '../../../store/actions/index';

const AddListName = ({ onSaveNewShoppingName }) => {
  const [ inputName, setInputName ] = useState('');
  const [ error, setError ] = useState(null);
  
  const setName = event => {
    setInputName(event.target.value)
  }
  
  const saveNameHandler = () => {
    const isNameValid = validateName(inputName, setError);
    
    if(isNameValid) {
      onSaveNewShoppingName(inputName)
      
      setError({
        message: 'The shopping list name has been changed correctly',
        type: 'success'
      })
    }
  };
  
  let errorClass = classes.Success;
  
  if(error) {
    if(error.type === 'error') {
      errorClass = classes.Error;
    }
  }
  
  return (
    <div className={classes.AddListName}>
      <div>
        <input type='text' placeholder='Enter a name...' className={classes.InputName} onChange={setName} />
        
        <button className={classes.InputButton} onClick={saveNameHandler}>Save</button>
        
        { error && <div className={errorClass}>{error.message}</div>}
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onSaveNewShoppingName: name => dispatch(actions.saveNewShoppingName(name))
});

export default connect(null, mapDispatchToProps)(AddListName);
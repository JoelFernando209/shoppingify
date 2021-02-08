import React from 'react';

import DeleteIcon from '../../../../assets/images/delete-icon.svg';

import Button from '../../../../components/UI/Button/Button';

import classes from './ShoppingItemModify.module.scss';

import { removeShoppingItem } from '../../../../firebase/FirebaseUtils/firebase.firestore';

const ShoppingItemModify = ({ children, clicked, onAddPiece, onSubstractPiece, onDeleteItem, idItem }) => {
  const deleteItemHandler = () => {
    onDeleteItem();
    
    removeShoppingItem(idItem);
  };
  
  return (
    <div className={classes.ShoppingItemModify}>
      <div className={classes.DeleteButtonContainer}>
        <Button
          btnType='orange'
          style={{ padding: '.4rem', borderRadius: '.5rem' }}
          clicked={deleteItemHandler}
        >
          <img src={DeleteIcon} alt='Delete Item' className={classes.DeleteButtonIcon}/>
        </Button>
      </div>
      
      <div className={classes.ModifyContainer}>
        <div className={classes.SubstractPieces} onClick={onSubstractPiece}>-</div>
        
        <div onClick={clicked}>{children}</div>
        
        <div className={classes.AddPieces} onClick={onAddPiece}>+</div>
      </div>
    </div>
  )
};

export default ShoppingItemModify;
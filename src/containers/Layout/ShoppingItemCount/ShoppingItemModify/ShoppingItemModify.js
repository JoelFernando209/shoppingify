import React from 'react';
import { connect } from 'react-redux';

import DeleteIcon from '../../../../assets/images/delete-icon.svg';

import Button from '../../../../components/UI/Button/Button';

import classes from './ShoppingItemModify.module.scss';

import * as actions from '../../../../store/actions/index';

import { removeShoppingItem } from '../../../../firebase/FirebaseUtils/firebase.firestore';

const ShoppingItemModify = ({ children, clicked, onAddPiece, onSubstractPiece, onDeleteItem, idItem, onRemoveItemListDB }) => {
  const deleteItemHandler = () => {
    onRemoveItemListDB(idItem, onDeleteItem)
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

const mapDispatchToProps = dispatch => ({
  onRemoveItemListDB: (idItem, endFunc) => dispatch(actions.removeItemListDB(idItem, endFunc))
});

export default connect(null, mapDispatchToProps)(ShoppingItemModify);
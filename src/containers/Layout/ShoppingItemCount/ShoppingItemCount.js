import React, { useState } from 'react';

import classes from './ShoppingItemCount.module.scss';

import ShoppingItemNormal from './ShoppingItemNormal/ShoppingItemNormal';
import ShoppingItemModify from './ShoppingItemModify/ShoppingItemModify';

import { changePieceInShopping } from '../../../firebase/FirebaseUtils/firestore/shoppingListItems';

const ShoppingItemCount = ({ pieces, idItem, deleteItemHandler }) => {
  const [ modifyStatus, setModifyStatus ] = useState(false);
  const [ statePieces, setStatePieces ] = useState(pieces);
  
  const addPiece = () => {
    setStatePieces(statePieces + 1);
    
    changePieceInShopping(idItem, statePieces+1);
  };
  
  const substractPiece = () => {
    if(statePieces > 1) {
      setStatePieces(statePieces - 1);
      
      changePieceInShopping(idItem, statePieces-1)
    }
  };
  
  const toggleModifyStatus = () => {
    setModifyStatus(!modifyStatus);
  };
  
  const normalStatus = <ShoppingItemNormal pieces={statePieces} clicked={toggleModifyStatus} />
  
  let statusComp = (
    <div style={{ marginLeft: 'auto', display: 'inline-block', cursor: 'pointer' }}>
      {normalStatus}
    </div>
  );
  
  if(modifyStatus) {
    statusComp = (
      <ShoppingItemModify
        clicked={toggleModifyStatus}
        onAddPiece={addPiece}
        onSubstractPiece={substractPiece}
        onDeleteItem={deleteItemHandler}
        idItem={idItem}
      >
        {normalStatus}
      </ShoppingItemModify>
    );
  }
  
  return statusComp;
}

export default ShoppingItemCount;
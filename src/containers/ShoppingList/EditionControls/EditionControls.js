import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './EditionControls.module.scss';

import Button from '../../../components/UI/Button/Button';
import ConfirmPopup from '../../../components/UI/ConfirmPopup/ConfirmPopup';

import * as actions from '../../../store/actions/index';

import { setStateMethods } from '../../../utils/style.utils';
import { deleteAllShoppingListItems } from '../../../firebase/FirebaseUtils/firestore/shoppingListItems';
import { setListInShoppingHistory } from '../../../firebase/FirebaseUtils/firestore/shoppingListHistory';

const EditionControls = ({ statusEdition, onDoneList, itemsList }) => {
  const [ cancelStatus, setCancelStatus ] = useState(false);
  const [ completeStatus, setCompleteStatus ] = useState(false);
  
  const cancelMethods = setStateMethods(cancelStatus, setCancelStatus);
  const completeMethods = setStateMethods(completeStatus, setCompleteStatus);
  
  let style = {};
  
  if(statusEdition) {
    style = {
      width: '100%',
      visibility: 'visible',
      opacity: '1'
    }
  }
  
  const doneListHandler = status => {
    setListInShoppingHistory(status)
      .then(() => {
        onDoneList();
        deleteAllShoppingListItems();
      });
  };
  
  const isItemsListEmpty = () => Object.keys(itemsList).length <= 0;
  
  return (
    <>
      <ConfirmPopup
        warning='Are you sure that you want to delete the list?'
        status={cancelStatus}
        desactivate={cancelMethods.desactivate}
        onConfirm={doneListHandler.bind(null, 'cancelled')}
      />
      
      <ConfirmPopup
        warning='Are you sure that you want to complete the list?'
        status={completeStatus}
        desactivate={completeMethods.desactivate}
        onConfirm={doneListHandler.bind(null, 'completed')}
      />
      
      <div className={classes.EditionControls} style={style}>
        <Button btnType='white' clicked={cancelMethods.activate} disabled={isItemsListEmpty()}>cancel</Button>
        
        <Button btnType='cyan' clicked={completeMethods.activate} disabled={isItemsListEmpty()}>complete</Button>
      </div>
    </>
  )
};

const mapStateToProps = state => ({
  itemsList: state.shopping.itemsList
});

const mapDispatchToProps = dispatch => ({
  onDoneList: () => dispatch(actions.deleteList())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditionControls);
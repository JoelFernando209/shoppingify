import React, { useState } from 'react';
import { connect } from 'react-redux';
 
import classes from './InfoItem.module.scss';

import InputInfo from './InputInfo/InputInfo';
import InfoControls from './InfoControls/InfoControls';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ConfirmPopup from '../../../components/UI/ConfirmPopup/ConfirmPopup';

import { isObjEmpty, isIdNotRepeteadInList } from '../../../utils/validation.utils';
import { combineItemsInCategory } from '../../../utils/immutable.utils';
import { validateClass } from '../../../utils/style.utils';
import { setCurrentShoppingListInfo } from '../../../firebase/FirebaseUtils/firestore/shoppingListCurrent';

import * as actions from '../../../store/actions/index';

const inputTitles = [
  'name',
  'category',
  'notes'
];

const inputEntries = [
  'nameItem',
  'categoryItem',
  'noteItem'
];

const InfoItem = ({ status, hideInfoItemHandler, currentInfoItem, onAddItem, onDeleteItem, nameShopping, itemsList, onRemoveItemList, onDeleteItemList }) => {
  const [ confirmStatus, setConfirmStatus ] = useState(false);
  
  const activateConfirm = () => {
    setConfirmStatus(true);
  };
  
  const desactivateConfirm = () => {
    setConfirmStatus(false);
  };
  
  const classesInfo = [classes.InfoItem];
  
  classesInfo.push(validateClass(
    status,
    classes.StyleActive,
    classes.StyleInactive
  ))
  
  const onAdditemAndCloseInfo = item => {
    if(isIdNotRepeteadInList(item.id, itemsList)) {
      onAddItem(item, item.id);
      
      setCurrentShoppingListInfo({
        shoppingName: nameShopping,
        items: combineItemsInCategory(item, itemsList),
        creationDate: new Date()
      });
    }
    
    hideInfoItemHandler();
  };
  
  const onDeleteItemAndCloseInfo = item => {
    onDeleteItem(item);
    
    if(!isIdNotRepeteadInList(item.id, itemsList)) {
      onRemoveItemList(item.id, onDeleteItemList.bind(null, item));
    }
    
    hideInfoItemHandler();
  }
  
  let inputsInfo = <Spinner />;
  let srcImg = '';
  let noImage = null;
  
  if(isObjEmpty(currentInfoItem)) {
    if(currentInfoItem.imageURL) {
      srcImg = currentInfoItem.imageURL
    } else {
      noImage = <span className={classes.NoImage}>No image for this item :(</span>
    }
    
    inputsInfo = inputEntries.map((inputEntry, index) => {
      const valueInput = currentInfoItem[inputEntry];
      
      const valueInputCheck = valueInput ? valueInput : 'Not defined';
      
      return <InputInfo key={inputEntry} title={inputTitles[index]} value={valueInputCheck} />
    });
  }
  
  return (
    <>
      <ConfirmPopup
        warning='Are you sure that you want to delete this item?'
        status={confirmStatus}
        desactivate={desactivateConfirm}
        onConfirm={onDeleteItemAndCloseInfo.bind(null, currentInfoItem)}
      />
      
      <div className={classesInfo.join(' ')}>
        <div className={classes.GoBack} onClick={hideInfoItemHandler}>
          &#8592;
          
          back
        </div>
        
        <div className={classes.ImageContainer}>
          { srcImg && <img className={classes.Image} src={srcImg} alt='Could not be loaded because of an invalid url.' />}
          
          {noImage}
        </div>
        
        <div className={classes.Inputs}>
          {inputsInfo}
        </div>
        
        <InfoControls
          clickedAdd={onAdditemAndCloseInfo.bind(null, currentInfoItem)}
          clickedDelete={activateConfirm}
        />
      </div>
    </>
  )
};

const mapStateToProps = state => ({
  nameShopping: state.shopping.nameShoppingList,
  itemsList: state.shopping.itemsList
})

const mapDispatchToProps = dispatch => ({
  onAddItem: (item, idItem) => dispatch(actions.saveItemList(item, idItem)),
  onDeleteItem: product => dispatch(actions.deleteProduct(product)),
  onRemoveItemList: (idItem, endFunc) => dispatch(actions.removeItemListDB(idItem, endFunc)),
  onDeleteItemList: item => dispatch(actions.deleteItemList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoItem);
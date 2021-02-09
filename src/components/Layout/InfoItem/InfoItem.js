import React from 'react';
import { connect } from 'react-redux';
 
import classes from './InfoItem.module.scss';

import InputInfo from './InputInfo/InputInfo';
import InfoControls from './InfoControls/InfoControls';
import Spinner from '../../UI/Spinner/Spinner';

import { isObjEmpty } from '../../../utils/validation.utils';
import { combineItemsInCategory } from '../../../utils/immutable.utils';
import { setCurrentShoppingListInfo } from '../../../firebase/FirebaseUtils/firebase.firestore';

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

const InfoItem = ({ status, hideInfoItemHandler, currentInfoItem, onAddItem, onDeleteItem, nameShopping, itemsList }) => {
  const classesInfo = [classes.InfoItem];
  
  if(status) {
    classesInfo.push(classes.StyleActive);
  } else {
    classesInfo.push(classes.StyleInactive);
  }
  
  const onAdditemAndCloseInfo = item => {
    onAddItem(item);
    
    setCurrentShoppingListInfo({
      shoppingName: nameShopping,
      items: combineItemsInCategory(item, itemsList),
      creationDate: new Date()
    });
    
    hideInfoItemHandler();
  };
  
  const onDeleteItemAndCloseInfo = item => {
    onDeleteItem(item);
    
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
        clickedDelete={onDeleteItemAndCloseInfo.bind(null, currentInfoItem)}
      />
    </div>
  )
};

const mapStateToProps = state => ({
  nameShopping: state.shopping.nameShoppingList,
  itemsList: state.shopping.itemsList
})

const mapDispatchToProps = dispatch => ({
  onAddItem: item => dispatch(actions.saveItemList(item)),
  onDeleteItem: product => dispatch(actions.deleteProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoItem);
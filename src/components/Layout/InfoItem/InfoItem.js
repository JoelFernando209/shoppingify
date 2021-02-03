import React from 'react';
import { connect } from 'react-redux';
 
import classes from './InfoItem.module.scss';

import InputInfo from './InputInfo/InputInfo';
import InfoControls from './InfoControls/InfoControls';
import Spinner from '../../UI/Spinner/Spinner';

import { isObjEmpty } from '../../../utils/validation.utils';

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

const InfoItem = ({ status, hideInfoItemHandler, currentInfoItem, onAddItem, onDeleteItem }) => {
  const classesInfo = [classes.InfoItem];
  
  if(status) {
    classesInfo.push(classes.StyleActive);
  } else {
    classesInfo.push(classes.StyleInactive);
  }
  
  const onAdditemAndCloseInfo = item => {
    onAddItem(item);
    
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
        { srcImg && <img className={classes.Image} src={srcImg} />}
        
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

const mapDispatchToProps = dispatch => ({
  onAddItem: item => dispatch(actions.saveItemList(item)),
  onDeleteItem: product => dispatch(actions.deleteProduct(product))
});

export default connect(null, mapDispatchToProps)(InfoItem);
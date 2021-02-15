import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import AddListName from '../../../containers/ShoppingList/AddListName/AddListName';
import EditionControls from '../../../containers/ShoppingList/EditionControls/EditionControls';
import ValidateShopping from './ValidateShopping/ValidateShopping';

import { validateClass } from '../../../utils/style.utils';

import * as actions from '../../../store/actions/index';

const ShoppingList = ({ addItemState, toggleItemStatus, statusShopping, onSetItems, editionMode, toggleEditionMode }) => {
  useEffect(() => {
    onSetItems();
  }, [onSetItems]);
  
  const classesShopping = [classes.ShoppingList];
  
  classesShopping.push(validateClass(
    statusShopping,
    classes.PhoneActive,
    classes.PhoneInactive
  ));
  
  return (
    <div className={classesShopping.join(' ')}>
      <PopupAddItem clicked={toggleItemStatus} />
      
      <ShoppingHeader
        toggleEditionMode={toggleEditionMode}
      />
      
      <ValidateShopping />
      
      <AddListName />
      <EditionControls statusEdition={editionMode} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetItems: () => dispatch(actions.getItemList())
});

export default connect(null, mapDispatchToProps)(ShoppingList);
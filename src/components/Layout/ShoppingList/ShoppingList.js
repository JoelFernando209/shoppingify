import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import AddListName from './AddListName/AddListName';
import Spinner from '../../UI/Spinner/Spinner';
import ShoppingEmpty from './ShoppingEmpty/ShoppingEmpty';
import ShoppingCategories from './ShoppingCategories/ShoppingCategories';

import { isObjEmpty } from '../../../utils/validation.utils';

import * as actions from '../../../store/actions/index';

const ShoppingList = ({ addItemState, toggleItemStatus, statusShopping, items, onSetItems, auth, shoppingEmpty }) => {
  useEffect(() => {
    onSetItems();
  }, [onSetItems]);
  
  let shoppingCategories = auth && <Spinner />;
  
  if(isObjEmpty(items) && auth) {
    const itemNames = Object.keys(items);
    
    shoppingCategories = auth && (
      <ShoppingCategories
        itemNames={itemNames}
        items={items}
      />
    );
  }
  
  if(shoppingEmpty) {
    shoppingCategories = auth && <ShoppingEmpty />;
  }
  
  const classesShopping = [classes.ShoppingList]
  
  if(statusShopping) {
    classesShopping.push(classes.PhoneActive);
  } else {
    classesShopping.push(classes.PhoneInactive);
  }
  
  return (
    <div className={classesShopping.join(' ')}>
      <PopupAddItem clicked={toggleItemStatus} />
      
      <ShoppingHeader />
      
      {shoppingCategories}
      
      <AddListName />
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.shopping.itemsList,
  auth: state.user.isAuth,
  shoppingEmpty: state.shopping.isShoppingEmpty
});

const mapDispatchToProps = dispatch => ({
  onSetItems: () => dispatch(actions.getItemList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './ShoppingList.module.scss';

import PopupAddItem from './PopupAddItem/PopupAddItem';
import ShoppingHeader from './ShoppingHeader/ShoppingHeader';
import ShoppingCategory from './ShoppingCategory/ShoppingCategory';
import AddListName from './AddListName/AddListName';
import Spinner from '../../UI/Spinner/Spinner';

import { isObjEmpty } from '../../../utils/validation.utils';
import { isUserAuth } from '../../../firebase/FirebaseUtils/firebase.auth';

import * as actions from '../../../store/actions/index';

const ShoppingList = ({ addItemState, toggleItemStatus, statusShopping, items, onSetItems, auth }) => {
  useEffect(() => {
    onSetItems();
  }, [onSetItems]);
  
  let shoppingCategories = auth && <Spinner />;
  
  if(isObjEmpty(items) && auth) {
    const itemNames = Object.keys(items);
    
    shoppingCategories = (
      <div className={classes.Categories}>
        {
          itemNames.map(itemName => {
            return (
              <ShoppingCategory
                key={items[itemName].id}
                title={items[itemName].categoryItem}
                arrItem={items[itemName].items}
              />
            )
          })
        }
      </div>
    );
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
  auth: state.user.isAuth
});

const mapDispatchToProps = dispatch => ({
  onSetItems: () => dispatch(actions.getItemList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../../UI/Spinner/Spinner';
import ShoppingCategories from './ShoppingCategories/ShoppingCategories';
import ShoppingEmpty from './ShoppingEmpty/ShoppingEmpty';

import { isObjEmpty } from '../../../../utils/validation.utils';

const ValidateShopping = ({ items, auth, shoppingEmpty }) => {
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
  
  return shoppingCategories;
};

const mapStateToProps = state => ({
  items: state.shopping.itemsList,
  auth: state.user.isAuth,
  shoppingEmpty: state.shopping.isShoppingEmpty
});

export default connect(mapStateToProps)(ValidateShopping);
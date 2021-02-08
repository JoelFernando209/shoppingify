import React from 'react';
import { connect } from 'react-redux';

import classes from './ShoppingCategory.module.scss';

import ShoppingItem from './ShoppingItem/ShoppingItem';

import * as actions from '../../../../../store/actions/index';

const ShoppingCategory = ({ title, arrItem, onDeleteItem }) => {
  const shoppingItems = arrItem.map(item => {
    return <ShoppingItem
      key={item.id}
      id={item.id}
      value={item.nameItem}
      pieces={item.pieces}
      deleteItemHandler={onDeleteItem.bind(null, item)}
    />
  })
  
  return (
    <div className={classes.Category}>
      <span className={classes.Title}>{title}</span>
      
      {shoppingItems}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onDeleteItem: item => dispatch(actions.deleteItemList(item))
});

export default connect(null, mapDispatchToProps)(ShoppingCategory);
import React from 'react';
import { connect } from 'react-redux';

import CreateIcon from '../../../../assets/images/create-icon.svg';

import classes from './ShoppingHeader.module.scss';

const ShoppingHeader = ({ shoppingName, toggleEditionMode }) => (
  <div className={classes.ShoppingHeader}>
    {shoppingName}
    
    <img src={CreateIcon} alt='Edit Shopping List' className={classes.CreateIcon} onClick={toggleEditionMode} />
  </div>
);

const mapStateToProps = state => ({
  shoppingName: state.shopping.nameShoppingList
});

export default connect(mapStateToProps)(ShoppingHeader);
import React from 'react';

import CartIcon from '../../../../assets/images/cart-icon.svg';

import classes from './NotificationsButton.module.scss';

const NotificationsButton = ({ numberNotifications, clicked }) => (
  <button className={classes.NotificationsButton} onClick={clicked}>
    <img src={CartIcon} alt='Cart' />
    <div className={classes.Notifications}>{numberNotifications}</div>
  </button>
);

export default NotificationsButton;
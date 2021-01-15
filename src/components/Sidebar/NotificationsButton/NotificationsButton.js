import React from 'react';

import CartIcon from '../../../assets/images/cart-icon.svg';

import classes from './NotificationsButton.module.scss';

const NotificationsButton = ({ numberNotifications }) => (
  <button className={classes.NotificationsButton}>
    <img src={CartIcon} />
    <div className={classes.Notifications}>{numberNotifications}</div>
  </button>
);

export default NotificationsButton;
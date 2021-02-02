import React from 'react';

import Logo from './Logo/Logo';
import SidebarNav from './SidebarNav/SidebarNav'
import NotificationsButton from './NotificationsButton/NotificationsButton';

import classes from './Sidebar.module.scss';

const Sidebar = ({ toggleShopping }) => {
  
  return (
    <div className={classes.Sidebar}>
      <Logo />
      <SidebarNav />
      <NotificationsButton numberNotifications='3' clicked={toggleShopping} />
    </div>
  )
};

export default Sidebar;
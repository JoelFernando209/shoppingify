import React from 'react';

import classes from './SidebarNavItem.module.scss';

import { NavLink } from 'react-router-dom';

const SidebarNavItem = ({ image, hoverItem, path }) => {
  
  return (
    <NavLink exact to={path} className={classes.nav} activeClassName={classes.navActive}>
      <div className={classes.SidebarNavItem}>
        <img src={image} alt={hoverItem} />
        
        <div className={classes.hoverItem}>{hoverItem}</div>
      </div>
    </NavLink>
  );
};

export default SidebarNavItem;
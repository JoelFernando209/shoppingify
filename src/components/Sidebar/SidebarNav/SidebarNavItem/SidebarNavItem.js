import React from 'react';

import classes from './SidebarNavItem.module.scss';

const SidebarNavItem = ({ image, hoverItem }) => {
  
  return (
    <div className={classes.SidebarNavItem}>
      <img src={image} alt={hoverItem} />
      
      <div className={classes.hoverItem}>{hoverItem}</div>
    </div>
  );
};

export default SidebarNavItem;
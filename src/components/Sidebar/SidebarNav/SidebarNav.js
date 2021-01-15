import React from 'react';

import ListIcon from '../../../assets/images/list-icon.svg';
import HistoryIcon from '../../../assets/images/history-icon.svg';
import StatisticsIcon from '../../../assets/images/statistics-icon.svg';

import classes from './SidebarNav.module.scss';

import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

const SidebarNav = () => (
  <div className={classes.SidebarNav}>
    <SidebarNavItem image={ListIcon} hoverItem='items' />
    <SidebarNavItem image={HistoryIcon} hoverItem='history' />
    <SidebarNavItem image={StatisticsIcon} hoverItem='statistics' />
  </div>
);

export default SidebarNav;
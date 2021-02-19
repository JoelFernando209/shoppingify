import React from 'react';

import SearchBox from './SearchBox/SearchBox';

import classes from './Header.module.scss';

const Header = ({ searchWordHandler }) => (
  <div className={classes.Header}>
    <div className={classes.HeaderText}>
      <span style={{ color: '#F9A109' }}>Shoppingify</span> allows you to take your shopping list wherever you go
    </div>
    
    <SearchBox change={searchWordHandler} />
  </div>
);

export default Header;
import React from 'react';

import SearchIcon from '../../../../assets/images/search-icon.svg';

import classes from './SearchBox.module.scss';

const SearchBox = ({ change }) => (
  <label className={classes.SearchBox}>
    <img src={SearchIcon} alt='Search' className={classes.SearchIcon} />
  
    <input type='text' placeholder='Search item...' className={classes.Input} onChange={change} />
  </label>
);

export default SearchBox;
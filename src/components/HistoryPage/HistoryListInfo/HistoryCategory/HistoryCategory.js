import React from 'react';

import classes from './HistoryCategory.module.scss';

import HistoryItem from './HistoryItem/HistoryItem';

const HistoryCategory = ({ nameHistory, items, showInfoItem }) => {
  
  const itemsCategory = items.map(item => {
    return <HistoryItem
      key={item.nameItem}
      nameItem={item.nameItem}
      pieces={item.pieces}
      clicked={showInfoItem.bind(null, item, false)}
    />
  });
  
  return (
    <div className={classes.HistoryCategory}>
      <div className={classes.Title}>{nameHistory}</div>
      
      <div className={classes.CategoryItems}>
        {itemsCategory}
      </div>
    </div>
  )
};

export default HistoryCategory;
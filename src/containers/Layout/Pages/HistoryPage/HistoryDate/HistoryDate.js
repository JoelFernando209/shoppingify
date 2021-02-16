import React from 'react';

import classes from './HistoryDate.module.scss';

import HistoryItem from './HistoryItem/HistoryItem';

const HistoryDate = ({ date, historyItemsArr }) => {
  
  const historyItems = historyItemsArr.map((item, index) => {
    return <HistoryItem
      key={index}
      nameItem={item.shoppingName}
      date={item.creationDate.toDate().toString()}
      status={item.status}
    />
  })
  
  return (
    <div className={classes.HistoryDate}>
      <div className={classes.TitleCategory}>{date}</div>
      
      {historyItems}
    </div>
  )
};

export default HistoryDate;
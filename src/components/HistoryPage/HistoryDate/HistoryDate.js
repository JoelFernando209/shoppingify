import React from 'react';

import classes from './HistoryDate.module.scss';

import HistoryItem from './HistoryItem/HistoryItem';

const HistoryDate = ({ date, historyItemsArr }) => {
  
  
  return (
    <div className={classes.HistoryDate}>
      <div className={classes.TitleCategory}>{date}</div>
      
      <HistoryItem nameEvent='Grocery List' date='Mon 24.8.2020' status='completed' />
      <HistoryItem nameEvent='Grocery List' date='Mon 24.8.2020' status='cancelled' />
    </div>
  )
};

export default HistoryDate;
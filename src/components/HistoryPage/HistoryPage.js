import React from 'react';

import classes from './HistoryPage.module.scss';

import HistoryDate from './HistoryDate/HistoryDate';

const HistoryPage = () => {
  
  return (
    <>
      <div className={classes.HistoryTitle}>Shopping History</div>
      
      <HistoryDate date='August 2020' />
      <HistoryDate date='August 2020' />
      <HistoryDate date='August 2020' />
      <HistoryDate date='August 2020' />
    </>
  )
};

export default HistoryPage;
import React, { useState, useEffect } from 'react';

import classes from './HistoryPage.module.scss';

import HistoryDate from './HistoryDate/HistoryDate';

import { getShoppingHistory } from '../../../../firebase/FirebaseUtils/firestore/shoppingListHistory';

const HistoryPage = () => {
  const [ historyPage, setHistoryPage ] = useState([]);
  
  useEffect(() => {
    getShoppingHistory(collection => {
      const result = [];
      
      collection.forEach(doc => {
        result.push(doc.data())
      })
      
      console.log(result);
      
      setHistoryPage(result);
    })
  }, []);
  
  let historyDates = null;
  
  if(historyPage.length) {
    historyDates = historyPage.map((date, index) => {
      return <HistoryDate key={index} date='August 2020' historyItemsArr={historyPage} />
    })
  }
  
  return (
    <>
      <div className={classes.HistoryTitle}>Shopping History</div>
      
      {historyDates}
    </>
  )
};

export default HistoryPage;
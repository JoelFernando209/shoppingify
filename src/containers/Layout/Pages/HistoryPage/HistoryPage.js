import React, { useState, useEffect } from 'react';

import classes from './HistoryPage.module.scss';

import HistoryDate from './HistoryDate/HistoryDate';
import Spinner from '../../../../components/UI/Spinner/Spinner';

import { getShoppingHistory } from '../../../../firebase/FirebaseUtils/firestore/shoppingListHistory';
import { joinItemsByTheirMonth } from '../../../../utils/list.utils';

const HistoryPage = ({ history }) => {
  const [ historyPage, setHistoryPage ] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if(!(historyPage.length)) {
      getShoppingHistory(collection => {
        const result = [];
        
        collection.forEach(doc => {
          result.push(doc.data())
        })
        
        setHistoryPage(result);
      })
    }
  }, []);
  
  let historyDates = <Spinner />;
  
  if(historyPage.length) {
    const historyJoined = joinItemsByTheirMonth(historyPage);
    const historyJoinedNames = Object.keys(historyJoined);
    
    historyDates = historyJoinedNames.map((name, index) => {
      return <HistoryDate
        key={name}
        date={name}
        historyItemsArr={historyJoined[name]}
        historyPush={history.push}
      />
    })
  }
  
  return (
    <div style={{ position: 'relative' }}>
      <div className={classes.HistoryTitle}>Shopping History</div>
      
      {historyDates}
    </div>
  )
};

export default HistoryPage;
import React, { useState, useEffect } from 'react';

import classes from './StatisticsPage.module.scss';

import StatisticsCategory from '../../../../components/StatisticsPage/StatisticsCategory/StatisticsCategory';
import StatisticsGraph from '../../../../components/StatisticsPage/StatisticsGraph/StatisticsGraph';
import Spinner from '../../../../components/UI/Spinner/Spinner';

import { setFuncWhenUserLoaded } from '../../../../firebase/FirebaseUtils/firebase.auth';
import { getCurrentShoppingList } from '../../../../firebase/FirebaseUtils/firestore/shoppingListCurrent';
import { getShoppingHistory } from '../../../../firebase/FirebaseUtils/firestore/shoppingListHistory';
import { getStatisticsBarItems, getStatisticsBarCategories } from '../../../../utils/statistics.utils';

const StatisticsPage = () => {
  const [ statisticsItems, setStatisticsItems ] = useState([]);
  const [ statisticsCategories, setStatisticsCategories ] = useState([]);
  
  useEffect(() => {
    setFuncWhenUserLoaded((user, unsubscribe) => {
      
      getCurrentShoppingList(user, unsubscribe)
        .then(doc => {
          const currentShopping = doc.data();
          
          getShoppingHistory(shoppingHistoryCol => {
            const historyData = shoppingHistoryCol.docs.map(doc => doc.data());
            
            const statisticsItems = getStatisticsBarItems(currentShopping, historyData);
            const statisticsCategories = getStatisticsBarCategories(currentShopping, historyData);
            
            setStatisticsItems(statisticsItems);
            setStatisticsCategories(statisticsCategories);
          });
        })
        .catch(err => {
          console.log(err.message);
        })
    })
  }, [getCurrentShoppingList, getShoppingHistory, getStatisticsBarItems]);
  
  let statisticscategories = <Spinner />;
  
  if(statisticsItems.length && statisticsCategories.length) {
    statisticscategories = (
      <>
        <StatisticsCategory
          nameCategory='Top Items'
          colorBar='#F9A109'
          arrBar={statisticsItems}
        />
        <StatisticsCategory
          nameCategory='Top Categories'
          colorBar='#56CCF2'
          arrBar={statisticsCategories}
        />
      </>
    );
  }
  
  return (
    <>
      <div className={classes.StatsGrid}>
        {statisticscategories}
      </div>
      
      <div className={classes.MonthlyGraph}>
        <h2>Monthly Summary</h2>
        
        <StatisticsGraph />
      </div>
    </>
  );
};

export default StatisticsPage;
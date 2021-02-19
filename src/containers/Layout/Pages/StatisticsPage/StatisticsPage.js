import React, { useState, useEffect } from 'react';

import classes from './StatisticsPage.module.scss';

import StatisticsCategory from '../../../../components/StatisticsPage/StatisticsCategory/StatisticsCategory';
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
            if(!shoppingHistoryCol.empty) {
              const historyData = shoppingHistoryCol.docs.map(doc => doc.data());
              
              const statisticsItems = getStatisticsBarItems(currentShopping, historyData);
              const statisticsCategories = getStatisticsBarCategories(currentShopping, historyData);
              
              setStatisticsItems(statisticsItems);
              setStatisticsCategories(statisticsCategories);
            } else {
              setStatisticsItems([{
                name: 'Not defined',
                percentage: '0'
              }]);
              setStatisticsCategories([{
                name: 'Not defined',
                percentage: '0'
              }]);
            }
          });
        })
        .catch(err => {
          console.log(err.message);
        })
    })
  }, []);
  
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
    </>
  );
};

export default StatisticsPage;
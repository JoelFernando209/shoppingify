import React from 'react';

import classes from './StatisticsPage.module.scss';

import StatisticsCategory from './StatisticsCategory/StatisticsCategory';
import StatisticsGraph from './StatisticsGraph/StatisticsGraph';

const StatisticsPage = () => {
  
  return (
    <>
      <div className={classes.StatsGrid}>
        <StatisticsCategory nameCategory='Fruits and Vegetables'/>
        <StatisticsCategory nameCategory='Fruits and Vegetables'/>
      </div>
      
      <div className={classes.MonthlyGraph}>
        <h2>Monthly Summary</h2>
        
        <StatisticsGraph />
      </div>
    </>
  );
};

export default StatisticsPage;
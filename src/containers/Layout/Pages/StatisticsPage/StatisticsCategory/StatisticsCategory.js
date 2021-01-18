import React from 'react';

import classes from './StatisticsCategory.module.scss';

import StatisticsBar from './StatisticsBar/StatisticsBar';

const StatisticsCategory = ({ nameCategory }) => {
  
  return (
    <div>
      <div className={classes.TitleCategory}>{nameCategory}</div>
      
      <div className={classes.StatisticsBars}>
        <StatisticsBar titleBar='Avocato' percentageBar='62' colorBar='#F9A109' />
        <StatisticsBar titleBar='Avocato' percentageBar='62' colorBar='#F9A109' />
      </div>
    </div>
  )
};

export default StatisticsCategory;
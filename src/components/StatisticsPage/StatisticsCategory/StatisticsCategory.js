import React from 'react';

import classes from './StatisticsCategory.module.scss';

import StatisticsBar from './StatisticsBar/StatisticsBar';

const StatisticsCategory = ({ nameCategory, colorBar, arrBar }) => {
  const statisticsBars = arrBar.map(bar => {
    return <StatisticsBar key={bar.name} titleBar={bar.name} percentageBar={bar.percentage} colorBar={colorBar} />
  })
  
  return (
    <div>
      <div className={classes.TitleCategory}>{nameCategory}</div>
      
      <div className={classes.StatisticsBars}>
        {statisticsBars}
      </div>
    </div>
  )
};

export default StatisticsCategory;
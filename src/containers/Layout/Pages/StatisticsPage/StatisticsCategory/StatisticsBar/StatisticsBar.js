import React from 'react';

import classes from './StatisticsBar.module.scss';

const StatisticsBar = ({ titleBar, percentageBar, colorBar }) => {
  
  let styleProgress = {
    width: `${percentageBar}%`,
    backgroundColor: colorBar
  }
  
  return (
    <div className={classes.StatisticsBar}>
      <div className={classes.InfoBar}>
        <div className={classes.TitleBar}>{titleBar}</div>
        
        <div className={classes.Percentage}>{percentageBar}%</div>
      </div>
      
      <div className={classes.BaseBar}>
        <div className={classes.ProgressBar} style={styleProgress}></div>
      </div>
    </div>
  )
};

export default StatisticsBar;
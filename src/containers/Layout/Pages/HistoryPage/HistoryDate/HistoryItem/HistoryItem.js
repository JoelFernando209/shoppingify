import React from 'react';

import CalendarIcon from '../../../../../../assets/images/calendar-icon.svg';
import ArrowRight from '../../../../../../assets/images/right-arrow.svg';

import classes from './HistoryItem.module.scss';

const HistoryItem = ({ nameItem, date, status }) => {
  let statusStyle = {}
  
  if(status === 'completed') {
    statusStyle = {
      border: '1px solid currentColor',
      color: '#56CCF2'
    }
  } else if(status === 'cancelled') {
    statusStyle = {
      border: '1px solid currentColor',
      color: '#EB5757'
    }
  }
  
  return (
    <div className={classes.HistoryItem}>
      {nameItem}
      
      <div className={classes.Info}>
        <div className={classes.InfoDate}>
          <img src={CalendarIcon} alt='Calendar' className={classes.Calendar} />
          
          {date}
        </div>
        
        <div className={classes.Status} style={statusStyle}>
          {status}
        </div>
      </div>
      
      <img src={ArrowRight} alt='' className={classes.ArrowRight}/>
    </div>
  )
};

export default HistoryItem;
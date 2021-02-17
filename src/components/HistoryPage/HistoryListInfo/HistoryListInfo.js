import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './HistoryListInfo.module.scss';

import CalendarIcon from '../../../assets/images/calendar-icon.svg';

import { formatHistoryDate } from '../../../utils/date.utils';

const HistoryListInfo = ({ history, itemInfo }) => {
  const goBackHandler = () => {
    history.goBack();
  };
  
  console.log(itemInfo);
  
  const isItemInfoValid = () => Object.keys(itemInfo).length > 0;
  
  if(!isItemInfoValid()) {
    history.push('/history');
  }
  
  return (
    <div className={classes.HistoryListInfo}>
      <div className={classes.GoBack} onClick={goBackHandler}>
        &#8592;
        
        back
      </div>
      
      <div className={classes.Title}>{isItemInfoValid() && itemInfo.shoppingName}</div>
      
      <div className={classes.Date}>
        <img src={CalendarIcon} alt='' />
        
        {isItemInfoValid() && formatHistoryDate(itemInfo.creationDate.toDate().toString())}
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  itemInfo: state.history.currentItemInfo
});

export default connect(mapStateToProps)(withRouter(HistoryListInfo));
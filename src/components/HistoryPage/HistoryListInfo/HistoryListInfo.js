import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './HistoryListInfo.module.scss';

import CalendarIcon from '../../../assets/images/calendar-icon.svg';

import { formatHistoryDate } from '../../../utils/date.utils';

import HistoryCategory from './HistoryCategory/HistoryCategory';

const HistoryListInfo = ({ history, itemInfo, showInfoItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const goBackHandler = () => {
    history.goBack();
  };
  
  const isItemInfoValid = () => Object.keys(itemInfo).length > 0;
  
  if(!isItemInfoValid()) {
    history.push('/history');
  }
  
  const dateHistory = isItemInfoValid() && formatHistoryDate(itemInfo.creationDate.toDate().toString())
  
  let categories = null;
  
  if(isItemInfoValid()) {
    const { items } = itemInfo;
    const itemNames = Object.keys(items);
    
    categories = itemNames.map(itemName => {
      return <HistoryCategory
        key={itemName}
        nameHistory={itemName}
        items={items[itemName].items}
        showInfoItem={showInfoItem}
      />
    })
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
        
        {dateHistory}
      </div>
      
      <div className={classes.HistoryCategories}>
        {categories}
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  itemInfo: state.history.currentItemInfo
});

export default connect(mapStateToProps)(withRouter(HistoryListInfo));
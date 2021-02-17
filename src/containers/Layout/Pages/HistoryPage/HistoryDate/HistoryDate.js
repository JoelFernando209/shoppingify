import React from 'react';
import { connect } from 'react-redux';

import classes from './HistoryDate.module.scss';

import HistoryItem from './HistoryItem/HistoryItem';

import { formatHistoryDate } from '../../../../../utils/date.utils';
import * as actions from '../../../../../store/actions/index';

const HistoryDate = ({ date, historyItemsArr, historyPush, onSetItem }) => {
  
  const onItemClick = item => {
    onSetItem(item);
    
    historyPush(`/history/${encodeURIComponent(item.shoppingName)}`);
  };
  
  const historyItems = historyItemsArr.map((item, index) => {
    return <HistoryItem
      key={index}
      nameItem={item.shoppingName}
      date={formatHistoryDate(item.creationDate.toDate().toString())}
      status={item.status}
      clicked={onItemClick.bind(null, item)}
    />
  })
  
  return (
    <div className={classes.HistoryDate}>
      <div className={classes.TitleCategory}>{date}</div>
      
      {historyItems}
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onSetItem: item => dispatch(actions.setCurrentItem(item))
});

export default connect(null, mapDispatchToProps)(HistoryDate);
import React from 'react';

import classes from './HistoryItem.module.scss';

const HistoryItem = ({ nameItem, pieces, clicked }) => (
  <div className={classes.HistoryItem} onClick={clicked}>
    <div className={classes.Title}>{nameItem}</div>
    
    <div className={classes.Pieces}><span>{ pieces ? pieces : '1' }</span> pcs</div>
  </div>
);

export default HistoryItem;
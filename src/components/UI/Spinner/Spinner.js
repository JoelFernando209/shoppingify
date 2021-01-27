import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Spinner.module.scss';

const Spinner = ({ status }) => (
  <Backdrop show={status}>
    <div className={classes.loader}>
      {/* Fallback */}
      Loading...
    </div>
  </Backdrop>
);

export default Spinner;
import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = () => (
  <div className={classes.loader}>
    {/* Fallback */}
    Loading...
  </div>
);

export default Spinner;
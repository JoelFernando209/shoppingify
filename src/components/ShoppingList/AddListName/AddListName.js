import React from 'react';

import classes from './AddListName.module.scss';

const AddListName = () => {
  
  return (
    <div className={classes.AddListName}>
      <div>
        <input type='text' placeholder='Enter a name...' className={classes.InputName} />
        
        <button className={classes.InputButton}>Save</button>
      </div>
    </div>
  )
};

export default AddListName;
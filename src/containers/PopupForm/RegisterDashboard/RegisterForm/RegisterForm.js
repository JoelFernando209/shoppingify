import React from 'react';

import classes from './RegisterForm.module.scss';

import Button from '../../../../components/UI/Button/Button';
import Input from '../../../../components/UI/Input/Input';

const RegisterForm = ({ setEmailInput, setPwInput, setUsernameInput, submit }) => (
  <div className={classes.Form}>
    <Input type='text' placeholder='Your Username...' label='Username' change={setUsernameInput} />
    <Input type='email' placeholder='Your Email...' label='Email' change={setEmailInput} />
    <Input type='password' placeholder='Your Password...' label='Password' change={setPwInput} />
    
    <Button btnType='orange' clicked={submit}>Send</Button>
  </div>
);

export default RegisterForm;
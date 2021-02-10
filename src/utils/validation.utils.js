const validateStr = (type, string, validateMethods) => {
  let isValid = true;
  let errMessage = '';
  
  if(validateMethods.minLength) {
    isValid = string.length >= validateMethods.minLength && isValid;
    
    if(!isValid) {
      errMessage = `The ${type} needs a minimum length of ${validateMethods.minLength} characters`;
      
      return [isValid, errMessage]
    }
  }
  
  if(validateMethods.maxLength) {
    isValid = string.length <= validateMethods.maxLength && isValid;
    
    if(!isValid) {
      errMessage = `The ${type} has a maximum length of ${validateMethods.maxLength} characters`;
      
      return [isValid, errMessage]
    }
  }
  
  if(validateMethods.email) {
    isValid = string.includes('@') && isValid;
    
    if(!isValid) {
      errMessage = `The ${type} doesn't have a @`;
      
      return [isValid, errMessage]
    }
  }
  
  if(validateMethods.required) {
    isValid = string.trim().length > 0 && isValid;
    
    if(!isValid) {
      errMessage = `The ${type} is required`;
      
      return [isValid, errMessage]
    }
  }
  
  return [isValid, errMessage];
};

export const validateEmail = (email, setError) => {
  const validateOptions = {
    required: true,
    email: true
  };
  
  const [ isValid, errMessage ] = validateStr('email', email, validateOptions);
  
  if(errMessage) {
    setError({ message: errMessage, type: 'error' });
  }
  
  return isValid;
}

export const validatePw = (pw, setError) => {
  const validateOptions = {
    required: true,
    minLength: 5
  };
  
  const [ isValid, errMessage ] = validateStr('password', pw, validateOptions);
  
  if(errMessage) {
    setError({ message: errMessage, type: 'error' });
  }
  
  return isValid;
}

export const validateName = (username, setError) => {
  const validateOptions = {
    required: true,
    minLength: 5,
    maxLength: 25
  };
  
  const [ isValid, errMessage ] = validateStr('name', username, validateOptions);
  
  if(errMessage) {
    setError({ message: errMessage, type: 'error' });
  }
  
  return isValid;
}


export const validateCategory = (category, setError) => {
  const validateOptions = {
    required: true
  };
  
  const [ isValid, errMessage ] = validateStr('category', category, validateOptions);
  
  if(errMessage) {
    setError({ message: errMessage, type: 'error' });
  }
  
  return isValid;
}

export const isObjEmpty = obj => Object.keys(obj).length > 0;

export const isShoppingEmpty = list => {
  const listNames = Object.keys(list);
  
  return listNames.every(currentName => list[currentName].items.length <= 0);
};

export const isIdNotRepeteadInList = (id, list) => {
  const listNames = Object.keys(list);
  
  return listNames.every(currentName => {
    const listItems = list[currentName].items;
    
    return listItems.every(item => item.id !== id);
  });
};
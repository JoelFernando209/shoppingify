export const toggleShakeClass = (stateArr, changeState, shakeClass) => {
  const indexShake = stateArr.findIndex(element => element === shakeClass)
  const stateArrClone = [...stateArr];
  
  if(indexShake !== -1) {
    stateArrClone.splice(indexShake, 1);
  } else {
    stateArrClone.push(shakeClass);
  }
  
  changeState(stateArrClone);
}

export const validateClass = (condition, ifTrueClass, ifFalseClass) => condition ? ifTrueClass : ifFalseClass;
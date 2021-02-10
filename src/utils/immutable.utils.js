export const combineItemsInCategory = (item, objToCombine) => {
  const { categoryItem } = item;
  
  if(objToCombine[categoryItem]) {
    return objToCombine[categoryItem].items.concat(item);
  } else {
    return [item];
  }
};
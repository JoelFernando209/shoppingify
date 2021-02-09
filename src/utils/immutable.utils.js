export const combineItemsInCategory = (item, objToCombine) => {
  const { categoryItem } = item;
  
  return objToCombine[categoryItem].items.concat(item);
};
export const formatItem = (itemToAdd, categoryItem, updatedItemsList) => {
  if(categoryItem in updatedItemsList) {
    updatedItemsList[categoryItem].items.push(itemToAdd);
  } else {
    updatedItemsList = {
      ...updatedItemsList,
      [categoryItem]: {
        categoryItem,
        id: categoryItem,
        items: [itemToAdd]
      }
    }
  }
  
  console.log(updatedItemsList)
  
  return updatedItemsList;
};
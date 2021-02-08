export const formatItem = (itemToAdd, categoryItem, updatedItemsList) => {
  if(categoryItem in updatedItemsList) {
    const itemsList = [ ...updatedItemsList[categoryItem].items ];
    
    itemsList.push(itemToAdd);
    
    updatedItemsList = {
      ...updatedItemsList,
      [categoryItem]: {
        ...updatedItemsList[categoryItem],
        items: itemsList
      }
    };
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
  
  return updatedItemsList;
};
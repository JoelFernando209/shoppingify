export const combineItemsInCategory = (item, objToCombine) => {
  const { categoryItem } = item;
  
  if(objToCombine[categoryItem]) {
    return {
      ...objToCombine,
      [categoryItem]: {
        ...objToCombine[categoryItem],
        items: objToCombine[categoryItem].items.concat(item)
      }
    };
  } else {
    return {
      ...objToCombine,
      [categoryItem]: {
        ...objToCombine[categoryItem],
        items: [item]
      }
    };
  }
};

const filterSimilarItems = (searchword, itemsArr) => itemsArr.filter(item => item.nameItem.toLowerCase().includes(searchword.toLowerCase()));

export const filterList = (searchword, list) => {
  const listNames = Object.keys(list);
  const result = {};
  
  listNames.forEach(listName => {
    const filterItems = filterSimilarItems(searchword, list[listName].items);
    
    if(filterItems.length > 0) {
      result[listName] = {
        ...list[listName],
        items: filterItems
      };
    }
  })
  
  return result;
};

export const changePiecesOfItem = (list, idItem, amountPieces) => {
  let resultItems = { ...list.items };
  const listNames = Object.keys(resultItems);
  
  listNames.forEach(listName => {
    const currentItemsOfList = [ ...resultItems[listName].items ];
    
    const searchedItem = currentItemsOfList.find(item => item.id === idItem);
    const searchedItemIndex = currentItemsOfList.findIndex(item => item.id === idItem);
    
    if(searchedItem && searchedItemIndex !== -1) {
      const { categoryItem } = searchedItem;
      
      const resultArrItems = [ ...resultItems[categoryItem].items ];
      
      resultArrItems[searchedItemIndex] = {
        ...resultArrItems[searchedItemIndex],
        pieces: amountPieces
      }
      
      resultItems = {
        ...resultItems,
        [categoryItem]: {
          ...resultItems[categoryItem],
          items: resultArrItems
        }
      }
      
    };
  });
  
  return resultItems;
};
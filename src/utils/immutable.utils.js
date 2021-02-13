export const combineItemsInCategory = (item, objToCombine) => {
  const { categoryItem } = item;
  
  if(objToCombine[categoryItem]) {
    return {
      ...objToCombine,
      [categoryItem]: objToCombine[categoryItem].items.concat(item)
    };
  } else {
    return {
      ...objToCombine,
      [categoryItem]: [item]
    };
  }
};

const filterSimilarItems = (searchword, itemsArr) => itemsArr.filter(item => item.nameItem.includes(searchword));

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
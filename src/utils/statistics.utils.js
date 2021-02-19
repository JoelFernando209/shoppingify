const joinLists = (...lists) => lists;

const getSumOfAllItems = objLists => {
  return objLists.reduce((acc, list) => {
    const listItemsName = Object.keys(list.items);
    
    return acc + listItemsName.reduce((acc, itemName) => acc + list.items[itemName].items.length, 0);
  }, 0);
};

const getSumOfAllCategories = objLists => {
  return objLists.reduce((acc, list) => acc + Object.keys(list.items).length, 0);
};

const sumEveryItemShopping = objLists => {
  const resultObj = [];
  
  objLists.forEach(list => {
    const listItemsName = Object.keys(list.items);
    
    listItemsName.forEach(itemName => {
      list.items[itemName].items.forEach(item => {
        const indexItem = resultObj.findIndex(itemResult => itemResult.name === item.nameItem);
        
        if(indexItem !== -1) {
          resultObj[indexItem] = {
            ...resultObj[indexItem],
            amount: resultObj[indexItem].amount + 1
          }
        } else {
          resultObj.push({
            name: item.nameItem,
            amount: 1
          });
        }
      })
    })
  })
  
  return resultObj;
};

const sumEveryCategoryShopping = objLists => {
  const resultObj = [];
  
  objLists.forEach(list => {
    const listItemsName = Object.keys(list.items);
    
    listItemsName.forEach(itemName => {
      const indexItem = resultObj.findIndex(itemResult => itemResult.name === itemName);
        
      if(indexItem !== -1) {
        resultObj[indexItem] = {
          ...resultObj[indexItem],
          amount: resultObj[indexItem].amount + 1
        }
      } else {
        resultObj.push({
          name: itemName,
          amount: 1
        });
      }
    })
  })
  
  return resultObj;
};


const setPercentageOfEveryItem = (amountOfAllItems, objAmountEveryItem) => {
  return objAmountEveryItem.map(item => ({
    name: item.name,
    percentage: ((item.amount/amountOfAllItems)*100).toFixed(0)
  }))
};

export const getStatisticsBarItems = (currentShopping, shoppingHistory) => {
  const joinedLists = currentShopping ? joinLists(currentShopping, ...shoppingHistory) : joinLists(...shoppingHistory);
  
  const amountAllItems = getSumOfAllItems(joinedLists);
  
  const amountOfEveryItem = sumEveryItemShopping(joinedLists);
  
  const percentageItems = setPercentageOfEveryItem(amountAllItems, amountOfEveryItem);
  
  percentageItems.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  
  return percentageItems.slice(0, 3);
};

export const getStatisticsBarCategories = (currentShopping, shoppingHistory) => {
  const joinedLists = currentShopping ? joinLists(currentShopping, ...shoppingHistory) : joinLists(...shoppingHistory);
  
  const amountAllCategories = getSumOfAllCategories(joinedLists);
  
  const amountOfEveryCategory = sumEveryCategoryShopping(joinedLists);
  
  const percentageCategories = setPercentageOfEveryItem(amountAllCategories, amountOfEveryCategory);
  
  percentageCategories.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  
  return percentageCategories.slice(0, 3);
};

export const joinItemsByTheirMonth = list => {
  const resultObj = {};
  
  list.forEach(item => {
    const dateItem = item.creationDate.toDate();
    const monthDate = dateItem.toLocaleString('default', { month: 'long' });
    const yearDate = dateItem.getFullYear();
    const fullDateItem = `${monthDate} ${yearDate}`;
    
    if(fullDateItem in resultObj) {
      resultObj[fullDateItem].push(item);
    } else {
      resultObj[fullDateItem] = [item];
    }
  });
  
  return resultObj;
};
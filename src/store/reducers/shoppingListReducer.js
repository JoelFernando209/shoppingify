import * as actionTypes from '../actions/actionTypes';

import { formatItem } from '../utils';

const initialState = {
  itemsList: {},
  actualShoppingInfo: {},
  shoppingHistory: []
};

const addItemList = (state, action) => {
  let updatedItemsList = { ...state.itemsList };
  
  const { categoryItem } = action.item;
  
  const itemToAdd = {
    ...action.item,
    pieces: 1
  };
  
  return {
    ...state,
    itemsList: formatItem(itemToAdd, categoryItem, updatedItemsList)
  }
};

export const deleteItemList = (state, action) => {
  let updatedItemsList = { ...state.itemsList };
  
  const { categoryItem } = action.item;
  
  const categoryItems = updatedItemsList[categoryItem].items;
  
  const deleteIndex = categoryItems.findIndex(element => element.id === action.item.id);
  
  if(deleteIndex !== -1) {
    categoryItems.splice(deleteIndex, 1)
  }
  
  return {
    ...state,
    itemsList: updatedItemsList
  }
};

const setItemList = (state, action) => {
  const { ref } = action;
  let updatedItemsList = { ...state.itemsList };
  
  ref.forEach(doc => {
    const { categoryItem } = doc.data();
    
    const itemToAdd = {
      ...doc.data(),
      id: doc.id
    }
    
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
  })
  
  return {
    ...state,
    itemsList: updatedItemsList
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ITEM_LIST: return setItemList(state, action)
    
    case actionTypes.DELETE_ITEM_LIST: return deleteItemList(state, action)
    
    case actionTypes.ADD_ITEM_LIST: return addItemList(state, action)
    
    default: return state
  }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';

import { formatItem } from '../utils';

const initialState = {
  itemsList: {},
  actualShoppingInfo: {},
  shoppingHistory: [],
  isShoppingEmpty: false,
  nameShoppingList: 'Shopping List'
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
  
  const { categoryItem, id } = action.item;

  const categoryItems = [ ...updatedItemsList[categoryItem].items ];
  
  const resultArr = categoryItems.filter(element => element.id !== id);
  
  const updatedResult = {
    ...updatedItemsList,
    [categoryItem]: {
      ...updatedItemsList[categoryItem],
      items: resultArr
    }
  };
  
  return {
    ...state,
    itemsList: updatedResult
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

const activateEmptyList = state => {
  return {
    ...state,
    isShoppingEmpty: true
  }
};

const desactivateEmptyList = state => {
  return {
    ...state,
    isShoppingEmpty: false
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.DESACTIVATE_EMPTY_LIST: return desactivateEmptyList(state)
    
    case actionTypes.ACTIVATE_EMPTY_LIST: return activateEmptyList(state)
    
    case actionTypes.SET_ITEM_LIST: return setItemList(state, action)
    
    case actionTypes.DELETE_ITEM_LIST: return deleteItemList(state, action)
    
    case actionTypes.ADD_ITEM_LIST: return addItemList(state, action)
    
    default: return state
  }
};

export default reducer;
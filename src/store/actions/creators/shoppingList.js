import * as actionTypes from '../actionTypes';
import { addShoppingItemDB, getShoppingItemDB, getCurrentShoppingListName, changeCurrentShoppingListName } from '../../../firebase/FirebaseUtils/firebase.firestore';
import { setFuncWhenUserLoaded, getUidSync } from '../../../firebase/FirebaseUtils/firebase.auth';

export const activateEmptyList = () => ({
  type: actionTypes.ACTIVATE_EMPTY_LIST
});

export const desactivateEmptyList = () => ({
  type: actionTypes.DESACTIVATE_EMPTY_LIST
});

export const addItemList = item => ({
  type: actionTypes.ADD_ITEM_LIST,
  item
});

export const saveItemList = item => {
  return dispatch => {
    addShoppingItemDB(item, () => {
      dispatch(addItemList(item))
    })
  };
}

export const deleteItemList = item => ({
  type: actionTypes.DELETE_ITEM_LIST,
  item
});

export const setItemList = ref => ({
  type: actionTypes.SET_ITEM_LIST,
  ref
})

export const getItemList = () => {
  return dispatch => {
    getShoppingItemDB(ref => {
      if(ref.docs.length > 0) {
        dispatch(setItemList(ref));
      } else {
        dispatch(activateEmptyList());
      }
    })
  };
}

export const setShoppingName = name => ({
  type: actionTypes.SET_SHOPPING_NAME,
  name
});

export const getShoppingName = () => {
  return dispatch => {
    setFuncWhenUserLoaded((user, unsubscribe) => {
      getCurrentShoppingListName(user, unsubscribe, name => {
        dispatch(setShoppingName(name))
      })
    })
  };
}

export const saveNewShoppingName = name => {
  return dispatch => {
    changeCurrentShoppingListName(getUidSync(), name, () => {
      dispatch(setShoppingName(name))
    })
  };
};
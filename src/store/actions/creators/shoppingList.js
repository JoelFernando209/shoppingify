import * as actionTypes from '../actionTypes';
import { addShoppingItemDB, getShoppingItemDB } from '../../../firebase/FirebaseUtils/firebase.firestore';

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

export const deleteItemList = product => ({
  type: actionTypes.DELETE_ITEM_LIST,
  product
});

export const setItemList = ref => ({
  type: actionTypes.SET_ITEM_LIST,
  ref
})

export const getItemList = () => {
  return dispatch => {
    getShoppingItemDB(ref => {
      dispatch(setItemList(ref));
    })
  };
}
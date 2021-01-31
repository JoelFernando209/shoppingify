import * as actionTypes from '../actionTypes';
import { snapshotProducts, addItemDB } from '../../../firebase/FirebaseUtils/firebase.firestore';

export const setProducts = snapshotProducts => {
  return {
    type: actionTypes.SET_PRODUCTS,
    snapshot: snapshotProducts
  }
};

export const getProducts = () => {
  return dispatch => {
    snapshotProducts(snapshot => {
      dispatch(setProducts(snapshot))
    })
  }
}

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product
  }
};

export const setProduct = product => {
  return dispatch => {
    addItemDB(product, productInfo => {
      dispatch(addProduct(productInfo))
    })
  };
}
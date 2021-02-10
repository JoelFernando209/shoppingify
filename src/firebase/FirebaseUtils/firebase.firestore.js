import firebase from '../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync, setFuncWhenUserLoaded } from './firebase.auth';

const db = firebase.firestore();

export const addItemDB = (objInfo, endFunc) => {
  const { dataDoc, setError } = objInfo;

  const infoItem = {
    ...dataDoc,
    timestamp: new Date(),
    uid: getUidSync()
  }
  
  db.collection('items')
    .add(infoItem)
    .then(doc => {
      const productInfo = {
        ...infoItem,
        id: doc.id
      }
      
      setError({ message: 'Item has been set correctly!', type: 'success' })
      
      endFunc(productInfo)
    })
    .catch(err => {
      console.log(err);
      setError({ message: err.message, type: 'error' })
    })
};

export const removeItemDB = (idItem, endFunc) => {
  db.collection('items')
    .doc(idItem)
    .delete()
    .then(() => {
      endFunc();
    })
};

export const snapshotProducts = funcSnapshot => {
  setFuncWhenUserLoaded((user, unsubscribe) => {
    db
      .collection('items')
      .where('uid', '==', user.uid)
      .get()
      .then(snapshot => {
        funcSnapshot(snapshot)
        
        unsubscribe();
      })
      .catch(err => {
        console.log(err.message)
      })
  });
};

export const addShoppingItemDB = (item, idItem) => {
  return db.collection('shoppingListItems')
    .doc(idItem)
    .set({
      categoryItem: item.categoryItem,
      nameItem: item.nameItem,
      uid: item.uid,
      pieces: 1
    })
}

export const getShoppingItemDB = endFunc => {
  setFuncWhenUserLoaded((user, unsubscribe) => {
    db.collection('shoppingListItems')
      .where('uid', '==', user.uid)
      .get()
      .then(snapshot => {
        endFunc(snapshot)
      })
      .then(unsubscribe)
      .catch(err => {
        console.log(err.message)
      })
  })
};

export const changePieceInShopping = (id, valuePieces) => {
  db.collection('shoppingListItems')
    .doc(id)
    .update({
      pieces: valuePieces
    })
    .catch(err => {
      console.log(err.message)
    })
};

export const removeShoppingItem = id => {
  return db.collection('shoppingListItems')
    .doc(id)
    .delete()
};

export const setCurrentShoppingListInfo = objInfo => {
  const { shoppingName, items, creationDate } = objInfo;
  const uidUser = getUidSync();
  
  db.collection('shoppingListCurrent')
    .doc(uidUser)
    .set({
      shoppingName,
      items,
      creationDate,
      uid: getUidSync()
    })
    .catch(err => {
      console.log(err.message);
    })
};

export const getCurrentShoppingListName = (user, unsubscribe, endFunc) => {
  db.collection('shoppingListCurrent')
    .doc(user.uid)
    .get()
    .then(doc => {
      endFunc(doc.data().shoppingName);
      
      unsubscribe();
    })
    .catch(err => {
      console.log(err.message)
    })
};

export const changeCurrentShoppingListName = (uid, name, endFunc) => {
  db.collection('shoppingListCurrent')
    .doc(uid)
    .update({
      shoppingName: name
    })
    .then(endFunc)
    .catch(err => {
      console.log(err.message)
    })
};
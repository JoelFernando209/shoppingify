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

export const addShoppingItemDB = (item, endFunc) => {
  db.collection('shoppingListItems')
    .add({
      categoryItem: item.categoryItem,
      nameItem: item.nameItem,
      uid: item.uid,
      pieces: 1
    })
    .then(() => {
      endFunc()
    })
    .catch(err => {
      console.log(err.message);
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
  db.collection('shoppingListItems')
    .doc(id)
    .delete()
    .catch(err => {
      console.log(err.message)
    })
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
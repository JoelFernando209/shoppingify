import firebase from '../../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync, setFuncWhenUserLoaded } from '../firebase.auth';

const db = firebase.firestore();

export const addShoppingItemDB = (item, idItem) => {
  return db.collection('shoppingListItems')
    .doc(idItem)
    .set({
      categoryItem: item.categoryItem,
      nameItem: item.nameItem,
      uid: item.uid,
      pieces: 1
    })
    .catch(err => {
      console.log(err.message)
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
    .catch(err => {
      console.log(err.message)
    })
};

export const deleteAllShoppingListItems = () => {
  const uidUser = getUidSync();
  
  const ref = db.collection('shoppingListItems')
  
  ref
    .where('uid', '==', uidUser)
    .get()
    .then(collection => {
      collection.docs.forEach(doc => {
        ref.doc(doc.id).delete()
      })
    })
    .catch(err => {
      console.log(err.message);
    });
};
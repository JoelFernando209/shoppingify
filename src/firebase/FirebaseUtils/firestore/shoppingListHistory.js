import firebase from '../../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync, setFuncWhenUserLoaded } from '../firebase.auth';

const db = firebase.firestore();

export const setListInShoppingHistory = status => {
  const uidUser = getUidSync();
   
  return db.collection('shoppingListCurrent')
    .doc(uidUser)
    .get()
    .then(doc => {
      db.collection('shoppingListHistory')
        .add({
          ...doc.data(),
          status
        })
        .catch(err => {
          console.log(err.message);
        })
    })
    .catch(err => {
      console.log(err.message);
    })
};

export const getShoppingHistory = endFunc => {
  setFuncWhenUserLoaded((user, unsubscribe) => {
    db.collection('shoppingListHistory')
      .where('uid', '==', user.uid)
      .get()
      .then(collection => {
        endFunc(collection)
         
        unsubscribe()
      })
  })
};
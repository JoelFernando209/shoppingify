import firebase from '../../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync, setFuncWhenUserLoaded } from '../firebase.auth';

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
      console.log(err.message);
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
    .catch(err => {
      console.log(err.message)
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
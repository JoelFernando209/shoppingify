import firebase from '../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync } from './firebase.auth';

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
      setError({ message: err.message, type: 'error' })
    })
};

export const snapshotProducts = funcSnapshot => {
  db
    .collection('items')
    .get()
    .then(snapshot => {
      funcSnapshot(snapshot)
    })
    .catch(err => {
      console.log(err.message)
    })
};
import firebase from '../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync } from './firebase.auth';

const db = firebase.firestore();

export const addItem = objInfo => {
  const { dataDoc, setError } = objInfo;
  const { categoryItem } = dataDoc;
  
  db.collection('categories')
    .doc(categoryItem)
    .collection('items')
    .add({
      ...dataDoc,
      timestamp: new Date(),
      uid: getUidSync()
    })
    .then(() => {
      setError({ message: 'Item has been set correctly!', type: 'success' })
    })
    .catch(err => {
      setError({ message: err.message, type: 'error' })
    })
};

export const snapshotItems = setState => {
  db
    .collection('items')
    .onSnapshot(snapshot => {
      const arrDataDocs = [];
      
      /*
        {
          categoryItem: 'category',
          uid: '',
          items: [
            {
              nameItem: 'name',
              timestamp: new Date(),
              imageURL: '',
              noteItem: ''
            }
          ]
        }
      */
      
      snapshot.forEach(doc => {
        
      })
      
      console.log(arrDataDocs);
      
      setState(arrDataDocs);
    },
      err => {
        console.log(err.message)
      }
    )
};
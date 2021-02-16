import firebase from '../../firebaseConfig.js';
import 'firebase/firestore';

import { getUidSync } from '../firebase.auth';

const db = firebase.firestore();

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

export const deleteCurrentShoppingListItem = idItem => {
  const uidUser = getUidSync();
  
  db.collection('shoppingListCurrent')
    .doc(uidUser)
    .get()
    .then(doc => {
      const { items } = doc.data();
      
      const itemsNames = Object.keys(items);
      
      // eslint-disable-next-line
      for(name of itemsNames) {
        // eslint-disable-next-line
        const currentItem = [ ...items[name].items ];
        const deleteIndex = currentItem.findIndex(item => item.id === idItem);
        
        if(deleteIndex !== -1) {
          currentItem.splice(deleteIndex, 1);
          
          const itemsResult = {
            ...items,
            // eslint-disable-next-line
            [name]: {
              // eslint-disable-next-line
              ...items[name],
              items: currentItem
            }
          }
          
          db.collection('shoppingListCurrent')
            .doc(uidUser)
            .update({
              items: itemsResult
            })
            .catch(err => {
              console.log(err.message);
            })
          
          break;
        }
      }
    })
};

export const getCurrentShoppingListName = (user, unsubscribe, endFunc) => {
  db.collection('shoppingListCurrent')
    .doc(user.uid)
    .get()
    .then(doc => {
      if(doc.exists) {
        endFunc(doc.data().shoppingName);
      }
      
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

export const deleteCurrentShoppingList = endFunc => {
  const uidUser = getUidSync();
  
  db.collection('shoppingListCurrent')
    .doc(uidUser)
    .delete()
    .then(endFunc)
};
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
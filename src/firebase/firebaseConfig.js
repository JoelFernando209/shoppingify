import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyARPu3es2vaiMeWrLd3_8osZGdQo135ppo",
  authDomain: "shoppingify-61e15.firebaseapp.com",
  projectId: "shoppingify-61e15",
  storageBucket: "shoppingify-61e15.appspot.com",
  messagingSenderId: "582855554578",
  appId: "1:582855554578:web:56e496dc99201b04620acb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
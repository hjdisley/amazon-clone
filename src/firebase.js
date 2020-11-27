import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA9CfDwbf3iY-S6q_tBd28oPLvMCTlDOKg',
  authDomain: 'clone-6673c.firebaseapp.com',
  databaseURL: 'https://clone-6673c.firebaseio.com',
  projectId: 'clone-6673c',
  storageBucket: 'clone-6673c.appspot.com',
  messagingSenderId: '958408852162',
  appId: '1:958408852162:web:8ffdab72dec5c86edfb15b',
  measurementId: 'G-WNE0BR4EPE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

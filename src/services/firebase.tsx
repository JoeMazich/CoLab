import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC_p9YFagWTrXctgmJAokMBLdQUpk8MhB0",
  authDomain: "colabthecommunity.firebaseapp.com",
  databaseURL: "https://colabthecommunity-default-rtdb.firebaseio.com",
  projectId: "colabthecommunity",
  storageBucket: "colabthecommunity.appspot.com",
  messagingSenderId: "973123106163",
  appId: "1:973123106163:web:5c14523a628b065a130106",
  measurementId: "G-57VBWHSE23"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();

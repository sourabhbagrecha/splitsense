import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCW5niW2oBzp0niXAHpNIHya04K8IeGyr8",
  authDomain: "splitsense-app.firebaseapp.com",
  databaseURL: "https://splitsense-app.firebaseio.com",
  projectId: "splitsense-app",
  storageBucket: "splitsense-app.appspot.com",
  messagingSenderId: "105000818031",
  appId: "1:105000818031:web:fda19d4f34b68ece3ec49a",
  measurementId: "G-VTKFPCGSH3"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
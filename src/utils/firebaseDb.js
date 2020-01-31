// import firebaseConfig from './firebaseConfig';
const admin =  require('firebase-admin');

const serviceAccount = require('./firebaseConfig');
console.log(serviceAccount);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://splitsense-app.firebaseio.com"
});

export const db = admin.firestore();
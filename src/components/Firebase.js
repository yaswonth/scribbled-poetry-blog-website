import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCpHGueU0tbyZ1csFvdQtLW-qVW35Q0OS0",
    authDomain: "scribbled-poetry.firebaseapp.com",
    databaseURL: "https://scribbled-poetry.firebaseio.com",
    projectId: "scribbled-poetry",
    storageBucket: "scribbled-poetry.appspot.com",
    messagingSenderId: "1071340003661",
    appId: "1:1071340003661:web:e5af497d43fbe66e391704",
    measurementId: "G-GFNLFSQTB5"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
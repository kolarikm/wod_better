import firebase from 'firebase/app';
import './firebase/auth';

const config = {
    apiKey: "AIzaSyDjyUaRUIcLTCFC6OifSTLupX8xkurAxGI",
    authDomain: "crossfit-b78fd.firebaseapp.com",
    databaseURL: "https://crossfit-b78fd.firebaseio.com",
    projectId: "crossfit-b78fd",
    storageBucket: "crossfit-b78fd.appspot.com",
    messagingSenderId: "331316578956"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export default auth;
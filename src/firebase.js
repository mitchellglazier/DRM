import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCCwTa_J6uJ1fk01kSkMZjJZUgrF_LMcU0",
    authDomain: "divorcerm1.firebaseapp.com",
    databaseURL: "https://divorcerm1.firebaseio.com",
    projectId: "divorcerm1",
    storageBucket: "divorcerm1.appspot.com",
    messagingSenderId: "176967854569"
  };
  firebase.initializeApp(config);

  export default firebase;
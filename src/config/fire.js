import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain:  process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:  process.env.REACT_APP_DATABASEURL,
    projectId:  process.env.REACT_APP_PROJECTID,
    storageBucket:  process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGINGSENDERID,
    appId:  process.env.REACT_APP_APPID,
    measurementId:  process.env.REACT_APP_MEASUREMENTID
  };

const fire  = firebase.initializeApp(firebaseConfig);

export default fire;
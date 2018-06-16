import 'firebase/firestore';
import * as firebase from 'firebase';

const {
  REACT_APP_FB_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_FB_DB_URL,
  REACT_APP_FB_PROJ_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_FB_DB_URL,
  projectId: REACT_APP_FB_PROJ_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export default auth;

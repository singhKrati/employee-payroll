import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/apps'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0fELRgv_yccFCv6smC-9YSGpkaOXaqho",
  authDomain: "blw-project-a6e62.firebaseapp.com",
  projectId: "blw-project-a6e62",
  storageBucket: "blw-project-a6e62.appspot.com",
  messagingSenderId: "445235718327",
  appId: "1:445235718327:web:a54f881ff5c19dd85e4532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth(app)
export default auth

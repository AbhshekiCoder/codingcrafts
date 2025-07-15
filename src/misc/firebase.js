
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCu2PQqrde1oj2UksdKsO6IT3K5vWM2XRY",
  authDomain: "codingcraft-3efb6.firebaseapp.com",
  databaseURL: "https://codingcraft-3efb6-default-rtdb.firebaseio.com",
  projectId: "codingcraft-3efb6",
  storageBucket: "codingcraft-3efb6.firebasestorage.app",
  messagingSenderId: "313321923329",
  appId: "1:313321923329:web:9bf640734390e952c3b100"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage}
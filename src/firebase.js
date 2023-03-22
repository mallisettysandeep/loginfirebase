import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBAZMnCLC64VuN-V_LQ-cWsfsEfIyDl24Q",
  authDomain: "fir-auth-1132-9ddeb.firebaseapp.com",
  projectId: "fir-auth-1132-9ddeb",
  storageBucket: "fir-auth-1132-9ddeb.appspot.com",
  messagingSenderId: "681354941886",
  appId: "1:681354941886:web:00342e593a259cc92c55ef",
  measurementId: "G-715YVBN1K8"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// Import the functions you need from the SDKs you need


// Add the Firebase services that you want to use
import 'firebase/firestore'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

export default firebaseApp.firestore();

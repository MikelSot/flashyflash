// Import the functions you need from the SDKs you need
import { getAuth } from '@firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQidU9tdYyc_IeE2XIlZ7-IyDex3c2NTo',
  authDomain: 'flashy-flash-faf0f.firebaseapp.com',
  projectId: 'flashy-flash-faf0f',
  storageBucket: 'flashy-flash-faf0f.appspot.com',
  messagingSenderId: '394834151286',
  appId: '1:394834151286:web:2b46fe30ae3fc8620b1c57',
  measurementId: 'G-0GR7S3T389'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

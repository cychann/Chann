import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyAfhzZoDmscQCIwtZCWExeHYVootZnHOzo",
  authDomain: "shoppy-8c8e8.firebaseapp.com",
  databaseURL:
    "https://shoppy-8c8e8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-8c8e8",
  storageBucket: "shoppy-8c8e8.appspot.com",
  messagingSenderId: "517583566083",
  appId: "1:517583566083:web:4538e6de56ae12be6ea536",
  measurementId: "G-6YVCS5WY3Z",
};

const app = initializeApp(firebaseConfig);

export default app;

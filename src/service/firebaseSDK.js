import { initializeApp } from "firebase/app";

const firebaseConfig = {
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

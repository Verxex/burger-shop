import { initializeApp } from "firebase/app";

const firebaseApp = {
  apiKey: "AIzaSyC6HFAgddgCHbpvpKwqki7i-xjdrQk9vjk",
  authDomain: "very-hot-burgers-4da31.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-4da31-default-rtdb.firebaseio.com",
  projectId: "very-hot-burgers-4da31",
  storageBucket: "very-hot-burgers-4da31.appspot.com",
  messagingSenderId: "1097252735583",
  appId: "1:1097252735583:web:465808254726c2784069ea"
};

const base = initializeApp(firebaseApp);

export { firebaseApp };

export default base;
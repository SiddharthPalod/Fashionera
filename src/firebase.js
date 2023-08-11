import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUv812AMoSEIry8W7jtaMdrO1sfXYlr10",
  authDomain: "fir-1-f58f2.firebaseapp.com",
  projectId: "fir-1-f58f2",
  storageBucket: "fir-1-f58f2.appspot.com",
  messagingSenderId: "19005535172",
  appId: "1:19005535172:web:9ac8205259dad03f2f6a91",
  measurementId: "G-WVVZS9YPZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCFoM7nd8UZsDk225wx2yHVlzgZyKyGKLs",
  authDomain: "hillstone-evangelical.firebaseapp.com",
  projectId: "hillstone-evangelical",
  storageBucket: "hillstone-evangelical.appspot.com",
  messagingSenderId: "823124460771",
  appId: "1:823124460771:web:5073e0d6935b15280371d6",
  measurementId: "G-R81H3VF9WQ"
};

export const app = initializeApp(firebaseConfig);
export const getFirebaseApp = () => {
  return app;
}

const analytics = getAnalytics(app);
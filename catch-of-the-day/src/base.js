import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKm1ZjTypXLySciCHVqqr1U3mELSByVYw",
  authDomain: "catch-of-the-day-yaswanth.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-yaswanth.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

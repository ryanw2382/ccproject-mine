import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDqTkyVSjLcobTGlnOVawr7uFf-em7-Opc",
  authDomain: "groupproject-6b847.firebaseapp.com",
  databaseURL: "https://groupproject-6b847.firebaseio.com",
  projectId: "groupproject-6b847",
  storageBucket: "groupproject-6b847.appspot.com",
  messagingSenderId: "773890413081"
};

var fire = firebase.initializeApp(config);
export default fire;

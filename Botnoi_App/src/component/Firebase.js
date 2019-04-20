import firebase from '@firebase/app';
const config = {
    apiKey: "AIzaSyAFfyLdqWrdchAJuE6V2mSgtqcbRD4W8pw",
    authDomain: "botnoi-hotel-app.firebaseapp.com",
    databaseURL: "https://botnoi-hotel-app.firebaseio.com",
    projectId: "botnoi-hotel-app",
    storageBucket: "botnoi-hotel-app.appspot.com",
    messagingSenderId: "294604349556"
  };
  export default class Firebase {
static auth;
static init(){
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
}
  }

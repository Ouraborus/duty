import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCmDbjyZHYLEWUFu-Guu98TyO8gv-4Gq-8',
  authDomain: 'duty-94b1f.firebaseapp.com',
  databaseURL: 'https://duty-94b1f.firebaseio.com',
  projectId: 'duty-94b1f',
  storageBucket: 'duty-94b1f.appspot.com',
  messagingSenderId: '620893240339'
}
firebase.initializeApp(config)

export default function loginUtils (user, pass) {
  firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
    // ...
  })
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var email = user.email
      console.log(email)
      // ...
    } else {
      // User is signed out.
      // ...
    }
  })
}

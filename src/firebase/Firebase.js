import firebase from 'firebase'

export class Firebase {
  constructor () {
    this.config = {
      apiKey: 'AIzaSyCmDbjyZHYLEWUFu-Guu98TyO8gv-4Gq-8',
      authDomain: 'duty-94b1f.firebaseapp.com',
      databaseURL: 'https://duty-94b1f.firebaseio.com',
      projectId: 'duty-94b1f',
      storageBucket: 'duty-94b1f.appspot.com',
      messagingSenderId: '620893240339'
    }
    firebase.initializeApp(this.config)
  }
  loginUtils (user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  }

  checkUserStatus () {
    console.log('por favor hijueputa')
    this.value = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        return true
      } else {
        return false
      }
    })
    console.log(this.value)
  }
}

// export function loginUtils (user, pass) {
//   firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     console.log(errorCode, errorMessage)
//     this.checkUserStatus()
//     // ...
//   })
// }

// export function checkUserStatus () {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

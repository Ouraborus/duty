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
    this.firebase = firebase.initializeApp(this.config)
  }
  loginUtils (user, pass) {
    this.firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
      const errorMessage = error.message
      console.log(errorMessage)
    })
  }

  async checkUserStatus () {
    var b
    await this.firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        b = true
      } else {
        b = false
      }
    })
    return b
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

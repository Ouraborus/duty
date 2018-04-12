import firebase from 'firebase'

export default class Firebase {
  static init (conf) {
    this.firebase = firebase.initializeApp(conf)
  }

  static loginUtils (user, pass) {
    this.firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
      const errorMessage = error.message
      console.log(errorMessage)
    })
  }

  static checkUserStatus () {
    const user = firebase.auth().currentUser
    if (user) {
      return true
    } else {
      return false
    }
  }

  static signOut () {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
      console.log(error)
    })
  }

  static createUser (user, pass) {
    firebase.auth().createUserWithEmailAndPassword(user, pass).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage, errorCode)
      // ...
    })
  }
}

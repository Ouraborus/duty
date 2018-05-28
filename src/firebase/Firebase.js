import firebase from 'firebase'

export default class Firebase {
  static init (conf) {
    this.firebase = firebase.initializeApp(conf)
    this.database = firebase.database()
  }

  static loginUtils (user, pass) {
    return this.firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
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

  static getStatus (callback, context) {
    let user = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/')
    user.on('value', function (snapshot) {
      callback(snapshot.val().company, context)
    })
  }

  static signOut () {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
      console.log(error)
    })
  }

  static createUser ({user, pass, image}) {
    // Create a root reference
    firebase.auth().createUserWithEmailAndPassword(user, pass).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage, errorCode)
    }).then(() => {
      const userRef = firebase.auth().currentUser
      const storageRef = firebase.storage().ref().child(userRef.uid + '/photo/' + image.name)
      const uploadTask = storageRef.put(image)
      uploadTask.then((snapshot) => {
        userRef.updateProfile({
          photoURL: snapshot.downloadURL
        })
      })
    })
  }

  static addUserData ({userName, userLastName, age = false, eps = false, company = false, nit = false}, firebaseGetStatus, signUpRef, context) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref('users/' + user.uid).set({
          username: userName,
          userLastName: userLastName,
          age: age,
          eps: eps,
          company: company,
          nit: nit
        }).then(firebaseGetStatus(signUpRef, context))
      }
    })
  }

  static addCompanyJob ({company, job, startDate, finishDate, salary, description}) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref('jobs/' + user.uid + '/' + Date.now() + user.uid.slice(0, 2) + '/').set({
          company: company,
          job: job,
          startDate: startDate,
          finishDate: finishDate,
          salary: salary,
          description: description,
          image: user.photoURL
        })
      } else {
        // No user is signed in.
      }
    })
  }

  static editCompanyJob ({jobId, company, job, startDate, finishDate, salary, description}) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let updates = {}
        updates['/jobs/' + user.uid + '/' + jobId + '/'] = {
          company: company,
          job: job,
          startDate: startDate,
          finishDate: finishDate,
          salary: salary,
          description: description
        }
        firebase.database().ref().update(updates)
      } else {
        // No user is signed in.
      }
    })
  }

  static getCompanyJobs (callback) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let companyJobs = firebase.database().ref('jobs/' + user.uid + '/')
        companyJobs.on('value', function (snapshot) {
          callback(snapshot.val())
        })
        return companyJobs
      }
    })
  }

  static getAllJobs () {
    let allJobs = firebase.database().ref('jobs/')
    allJobs.on('value', function (snapshot) {
      console.log(snapshot.val())
    })
  }

  static deleteCompanyJob (id) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let job = firebase.database().ref('jobs/' + user.uid + '/' + id)
        job.remove()
      }
    })
  }
}

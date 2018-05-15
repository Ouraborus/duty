import firebase from 'firebase'

export default class Firebase {
  static init (conf) {
    this.firebase = firebase.initializeApp(conf)
    this.database = firebase.database()
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

  static createUser ({user, pass}) {
    firebase.auth().createUserWithEmailAndPassword(user, pass).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage, errorCode)
    })
  }

  static addUserData ({userName, userLastName, age = false, eps = false, company = false, nit = false}) {
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
        })
      } else {
        // No user is signed in.
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
          description: description
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
      } else {
        console.log('error')
      }
    })
  }

  static deleteCompanyJob (id) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let job = firebase.database().ref('jobs/' + user.uid + '/' + id)
        job.remove()
      } else {
        console.log('error')
      }
    })
  }
}

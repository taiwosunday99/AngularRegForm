


// myAPP.factory('authenticationService', ['$window', 'constants', '$q',

// function AuthenticationService($window, constants, $q) {

//     "use strict";

//     return {
//         login: login,
//         register: register
//     }


//     function login(user) {
//         let regEmail = user.email.trim();
//         let regPassword = user.password;

//         let signInTask = $q.defer();

//         firebase.auth()
//             .signInWithEmailAndPassword(regEmail, regPassword)
//             .then(function (firebaseUserObject) {
//                 $window.sessionStorage["firebaseUserObject"] = JSON.stringify(firebaseUserObject.user);
//                 let userUniqueId = firebaseUserObject.user.uid;

//                 constants.USERS_DB_REF.child(userUniqueId)
//                     .once("value")
//                     .then(function (snapshot) {
//                         if (snapshot.exists()) {
//                             let currentUserObject = snapshot.val();
//                             $window.sessionStorage["currentUserObject"] = JSON.stringify(currentUserObject.user);
//                             signInTask.resolve(currentUserObject);
//                         } else {
//                             signInTask.reject("This user is registered but has no data in the database");
//                         }
//                     })

//             })
//             .catch(function (error) {
//                 signInTask.reject(error.message);
//             })
//         return signInTask.promise;

//     }

//     function register(user) {
//         let regFirstName = user.firstname.trim();
//         let regLastName = user.lastname.trim();
//         let regEmail = user.email.trim();
//         let regPassword = user.password;


//         firebase.auth()
//             .createUserWithEmailAndPassword(regEmail, regPassword)
//             .then(function (firebaseUserObject) {

//                 let userUniqueId = firebaseUserObject.user.uid;
//                 if ($window.sessionStorage["currentUserObject"] == null) {
//                     // If a user is already signed in eg admin, don't override
//                     $window.sessionStorage["firebaseUserObject"] = JSON.stringify(firebaseUserObject.user);
//                 }

//                 sendVerificationEmail(firebaseUserObject.user)
//                     .then(function () {
//                         updateUsername(firebaseUserObject.user, regFirstName, regLastName)
//                             .then(function () {
//                                 addUserToDatabase(userUniqueId, user)
//                                     .then(function (userObject) {
//                                         if ($window.sessionStorage["currentUserObject"] == null) {
//                                             // If a user is already signed in eg admin, don't override
//                                             $window.sessionStorage["currentUserObject"] = JSON.stringify(userObject);
//                                         }
//                                         createUserAccountTask.resolve(userObject);
//                                     })
//                             })
//                             .catch(function (errorMessage) {
//                                 // Could not create user in database
//                                 createUserAccountTask.reject(errorMessage);
//                             })
//                     })
//                     .catch(function (errorMessage) {
//                         // Could not send verification email
//                         createUserAccountTask.reject(errorMessage);
//                     })
//             })
//             .catch(function (error) {
//                 // Registration error
//                 createUserAccountTask.reject(error.message);
//             })

//     }



// }])





// myAPP.factory('Authentication', ['$rootScope', '$firebaseAuth'])

// function Authentication($rootScope, $firebaseAuth) {

//  var database = firebase.database().ref("users");

//   database.push($scope.user);

//  var ref = new Firebase();
//   auth = $firebaseAuth(ref);


//  return {
//      login: function(user)  {

//          $rootScope.message = "Welcome " + user.email;

//      },

//      register: function(user){
//           firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//               .then(function () {
//                   console.log("registration was successful");
//                   $rootScope.message = "Hi " + user.firstname + ", Thank you for registering!!";
//               }).catch(function (error) {
//                   // Handle Errors here.
//                   $rootScope.message = error.message;
//                   // ...

//               });


//      }


//  };

// }





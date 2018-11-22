

myAPP.controller('RegistrationController', RegistrationController);




function RegistrationController($scope) {

    console.log("this is reg controller");
    // var vm = this;

    var database = firebase.database();

    dataRef = database.ref("users");






    //Login function
    $scope.login = function () {

        // auth = firebase.auth();

        firebase.auth().signInWithEmailAndPassword(
            $scope.user.email,
            $scope.user.password
        ).then(function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log("You are logged in as " + user.email);
                   $scope.message = "You are logged in as " + user.email;

                    window.location.assign('#!/success');
                    
                   
                }
                 

            })

        }).catch(function (error) {
            // Handle Errors here.
            $scope.message = error.message;
            console.log("not logged in");
            // ...



        });

        document.getElementById("myForm").reset();


       

    }








    //Registration function
    $scope.register = function () {

        dataRef = database.ref("users").push();
        // var firstName = $scope.user.firstname;
        let userId = dataRef.key;
       
        var d = new Date();
        //  var myDate = Date.parse(dd);

        firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
            .then(function () {
                console.log("adding to database");
                dataRef.set({
                    firstname: $scope.user.firstname,
                    lastname: $scope.user.lastname,
                    date: Date.parse(d),
                    email: $scope.user.email,
                    userID: userId
                })
                console.log("registration was successful");
                $scope.message = "Hi " + $scope.user.firstname + ", Thank you for registering!!";
            }).catch(function (error) {
                // Handle Errors here.
                $scope.message = error.message;
                // ...
            })





            

            const regClass = Parse.Object.extend('regClass');
            const regObject = new regClass();

            regObject.set('regKey1', '1011');
            regObject.set('regKey2', '1201');

            regObject.save().then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            );

          
            const query = new Parse.Query(regClass);
            query.equalTo("regKey1", "1011");
            query.find().then((results) => {
                results.forEach((result) => {
                    const regKey1 = result.get('regKey1');
                    const regKey2 = result.get('regKey2');
                    console.log(regKey1, regKey2);
                })
            }, (error) => {
                console.error(error);
            });

            query.get('VR5BGpJC5h').then((object) => {
                object.set('regKey1', 'new value');
                object.save().then((response) => {
                    console.log(response);
                })
            })

            const user = new Parse.User()
            user.set('username', 'taiwosunday');
            user.set('email', 'taioneforever@gmail.com');
            user.set('password', 'babyboy');

            user.signUp().then((user) => {
                console.log(user);
            }).catch(error => {
                console.error(error);
            });

            // Pass the username and password to logIn function
            Parse.User.logIn("taiwosunday", "babyboy").then((user) => {
                // Do stuff after successful login
                console.log(user);
            }).catch(error => {
                console.error(error);
            })
        document.getElementById("myForm").reset();

    }




};
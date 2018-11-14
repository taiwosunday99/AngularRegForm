

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
                    
                    //  $scope.message = "You are logged in as " + user.email;
                }
                 

            })

        }).catch(function (error) {
            // Handle Errors here.
            $scope.message = error.message;
            console.log("not loggeg in");
            // ...



        });

        document.getElementById("myForm").reset();


        // $scope.message = "Welcome " + $scope.user.email;




    }








    //Registration function
    $scope.register = function () {

        // var firstName = $scope.user.firstname;

        var timestamp = new Date().getTime();

        firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
            .then(function () {
                console.log("adding to database");
                dataRef.push({
                    firstname: $scope.user.firstname,
                    lastname: $scope.user.lastname,
                    date: timestamp,
                    email: $scope.user.email
                })
                console.log("registration was successful");
                $scope.message = "Hi " + $scope.user.firstname + ", Thank you for registering!!";
            }).catch(function (error) {
                // Handle Errors here.
                $scope.message = error.message;
                // ...
            })

      


        document.getElementById("myForm").reset();

    }




};
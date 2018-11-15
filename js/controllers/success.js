myAPP.controller('SuccessController', SuccessController)


var database = firebase.database();

dataRef = database.ref("users");

var vm = this;

function SuccessController($scope) {

    console.log("this is success controller");

    // $scope.message = $scope.user.email;



    $scope.savePassword = function () {

        console.log("password reset email page!");

        // $scope.message = "User's info: " + $scope.user.pass;

        var auth = firebase.auth();
        var emailAddress = $scope.user.email;

        auth.sendPasswordResetEmail(emailAddress)
            .then(function () {
                $scope.message = "New Password has being sent to this email.. " + $scope.user.email;
                console.log("check your mail for new password..");
            })
            .catch(function (error) {
                $scope.message = error.message;
                console.log("failed to send password!");
            })
        document.getElementById("passPage").reset();


    }





    $scope.reset = function () {


        console.log("password reset page");

        var user = firebase.auth().currentUser;

        var newPassword = $scope.user.pass;

        user.updatePassword(newPassword).then(function () {
            $scope.message = "Password update was successful!! " + $scope.user.pass;
            console.log("Password update was successful!!");
        }).catch(function (error) {
            $scope.message = error.message;
            console.log("failed to update password");
        });

        document.getElementById("resetPass").reset();

    }


    successPage();


    function successPage() {

                 
       

        //Populating users from database to success page

        dataRef.once('value', function (snapshot) {
                        
            if (snapshot.exists()) {
                $scope.user = [];
                console.log("users in database");
                let myData = snapshot.val();
                    
                angular.forEach(myData, function (value, index) {
                  
                    
                    $scope.user.push({
                        "date": value.date,
                        "email": value.email,
                        "firstname": value.firstname,
                        "lastname": value.lastname
                    })
                
                    $scope.$apply();

                });


           }

        })

    }




    $scope.logout = function () {

        firebase.auth().signOut().then(function () {
            $scope.message = "You have signed out as " + $scope.user.email;
            console.log("You have signed out as: " + $scope.user.email);

            // Sign-out successful.

        }).catch(function (error) {
            // An error happened.
            $scope.message = error.message;
            console.log("failed to sign out");
        });

    }



    $scope.deleteBtn = function(user) {

        console.log("delete button clicked");
        // var recentUser = $scope.user.email;

        var user = firebase.auth().currentUser;
        // if(recentUser == user) {

               user.delete().then(function () {
                   // User deleted.
                   $scope.message = "This user has being deleted " + $scope.user;
                   console.log("this user has being deleted " + $scope.user);
               }).catch(function (error) {
                   // An error happened.
                   $scope.message = error.message;
                   console.log("failed to delete " + $scope.user);
               });

        // }
     
    }






};
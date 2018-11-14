var myAPP = angular.module('myApp', ['ngRoute']);



myAPP.config(function ($routeProvider) {


    $routeProvider

        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'RegistrationController'

        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'RegistrationController'

        })
        .when('/success', {
            templateUrl: '/views/success.html',
            controller: 'SuccessController'
        })
        .when('/password', {
            templateUrl: '/views/password.html',
            controller: 'SuccessController'
        })
        .when('/reset', {
            templateUrl: '/views/resetPassword.html',
            controller: 'SuccessController'
        })
        .otherwise({
            redirectTo: '/login'
        });




});
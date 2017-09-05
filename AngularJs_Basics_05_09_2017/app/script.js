var millyApp = angular.module('millyApp', ['ngRoute']);
millyApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : '../pages/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : '../pages/about.html',
            controller  : 'aboutController'
        })

        .when('/contact', {
            templateUrl : '../pages/contact.html',
            controller  : 'contactController'
        });
});



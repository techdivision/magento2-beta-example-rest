'use strict';

/**
 * @ngdoc overview
 * @name magento2BetaExampleRestApp
 * @description
 * # magento2BetaExampleRestApp
 *
 * Main module of the application.
 */
angular
    .module('magento2BetaExampleRestApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                templateUrl: 'views/logout.html',
                controller: 'LogoutCtrl'
            })
            .when('/customer/edit/:id', {
                templateUrl: 'views/editcustomer.html',
                controller: 'EditcustomerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

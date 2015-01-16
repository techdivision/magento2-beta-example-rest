'use strict';

/**
 * @ngdoc function
 * @name magento2BetaExampleRestApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the magento2BetaExampleRestApp
 */
angular.module('magento2BetaExampleRestApp')
    .controller('LogoutCtrl', function ($scope, $location, magento2Service) {

        magento2Service.logout().then(function () {
            $scope.successmessages = 'Logged out successfully.';
            $scope.$apply();
        });

    });

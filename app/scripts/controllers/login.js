'use strict';

/**
 * @ngdoc function
 * @name magento2BetaExampleRestApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the magento2BetaExampleRestApp
 */
angular.module('magento2BetaExampleRestApp')
    .controller('LoginCtrl', function ($scope, $location, magento2Service) {

        $scope.loginPost = function() {
            magento2Service.login($scope.username, $scope.password, $scope.permanent).then(function () {
                    $location.url('/');
                },
                function (response) {
                    $scope.errormessages = response.data.message;
                });
        };

    });

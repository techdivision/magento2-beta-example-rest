'use strict';

/**
 * @ngdoc function
 * @name magento2BetaExampleRestApp.controller:RestdemoCtrl
 * @description
 * # RestdemoCtrl
 * Controller of the magento2BetaExampleRestApp
 */
angular.module('magento2BetaExampleRestApp')
    .controller('MainCtrl', function ($scope, $location, magento2Service) {

       if(!magento2Service.getApiToken()){
            $location.url('/login');
       }

        magento2Service.listCustomers().then(function (response) {
                $scope.customers = response.data;
            }
        );

    });

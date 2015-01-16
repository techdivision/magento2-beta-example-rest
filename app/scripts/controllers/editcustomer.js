'use strict';

/**
 * @ngdoc function
 * @name magento2BetaExampleRestApp.controller:EditcustomerCtrl
 * @description
 * # EditcustomerCtrl
 * Controller of the magento2BetaExampleRestApp
 */
angular.module('magento2BetaExampleRestApp')
  .controller('EditcustomerCtrl', function ($scope, $location, $routeParams, magento2Service) {

    var customerId = $routeParams.id;

    $scope.saveCustomer = function() {
        magento2Service.saveCustomer($scope.customer).then(function(response) {
            $location.url('/');

        },
        function(response) {
            $scope.errormessages = JSON.stringify(response.data);
        })

    };

    magento2Service.loadCustomer(customerId).then(function(response) {
        $scope.customer = response.data;
    });

  });

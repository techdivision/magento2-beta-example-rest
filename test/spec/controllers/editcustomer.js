'use strict';

describe('Controller: EditcustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('magento2BetaExampleRestApp'));

  var EditcustomerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcustomerCtrl = $controller('EditcustomerCtrl', {
      $scope: scope
    });
  }));

});

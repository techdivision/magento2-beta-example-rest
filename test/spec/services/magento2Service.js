'use strict';

describe('Service: magento2Service', function () {

  // load the service's module
  beforeEach(module('magento2BetaExampleRestApp'));

  // instantiate service
  var magento2Service;
  beforeEach(inject(function (_magento2Service_) {
    magento2Service = _magento2Service_;
  }));

  it('should do something', function () {
    expect(!!magento2Service).toBe(true);
  });

});

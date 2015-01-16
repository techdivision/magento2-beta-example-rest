'use strict';

/**
 * @ngdoc service
 * @name magento2BetaExampleRestApp.magento2
 * @description
 * # magento2
 * Service in the magento2BetaExampleRestApp.
 */
angular.module('magento2BetaExampleRestApp')
    .service('magento2Service', function ($http) {

        var apiToken = localStorage.apiToken;
        var apiBaseUrl = 'http://magento2.local/rest/V1/';

        function getApiToken() {
            return apiToken;
        }

        function call(action, method, params) {

            var token = getApiToken();

            var req = {
                method: method,
                url: apiBaseUrl + action,
                data: params
            };

            // only set headers if token has already been generated
            if (token) {
                req.headers = {
                    'Authorization': 'Bearer ' + token
                };
            }

            return $http(req);
        }

        function login(username, password, permanent) {

            var params = {
                'username': username, 'password': password
            };

            return call('integration/admin/token', 'POST', params).then(function (response) {
                apiToken = response.data;

                // check if checkbox for permanent login was set
                if (permanent === true) {
                    localStorage.apiToken = apiToken;
                }
            });

        }

        function logout() {
            var logoutPromise = new Promise(
                // The resolver function is called with the ability to resolve or
                // reject the promise
                function (resolve, reject) {
                    apiToken = null;
                    localStorage.apiToken = null;
                    resolve(true);
                }
            );

            return logoutPromise;
        }

        function listCustomers() {
            return call('customers/search?searchCriteria', 'GET');
        }

        function loadCustomer(id) {
            return call('customers/' + id, 'GET');
        }

        function saveCustomer(customer) {
            return call('customers/' + customer.id, 'PUT', {customer: customer});
        }

        return {
            login: login,
            logout: logout,
            getApiToken: getApiToken,
            listCustomers: listCustomers,
            loadCustomer: loadCustomer,
            saveCustomer: saveCustomer
        };

    });

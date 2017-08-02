(function() {
    'use strict';

    angular.module('customerManagerApp', ['ngRoute'])
        .config(configFn);

    function configFn($routeProvider) {

        $routeProvider
            .when('/customers', {
                controller: 'CustomerListController',
                controllerAs: 'customerListVM',
                templateUrl: 'views/customers.tpl.html'
            })
            .when('/customers/:id', {
                templateUrl: 'views/customer-details.tpl.html'
            })
            .otherwise({
                redirectTo: '/customers'
            });
    }

})();
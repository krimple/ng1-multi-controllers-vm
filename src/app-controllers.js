(function() {
    'use strict';

    angular.module('customerManagerApp')
        .controller('CustomerListController', CustomerListController)
        .controller('CustomerPositionController', CustomerPositionController)
        .controller('CustomerTradesController', CustomerTradesController);


    function CustomerListController(customerManager) {
        var customerListVm = this;

        customerListVm.customers = customerManager.getCustomers();
        customerListVm.updateCustomers = function() {
            customerListVm.customers = customerManager.getCustomers();
        };
    }

    // function CustomerListController($scope, customerManager) {
    //     $scope.customers = customerManager.getCustomers();
    //     $scope.updateCustomers = function() {
    //         $scope.customers = customerManager.getCustomers();
    //     };
    // }
    function CustomerPositionController($routeParams, customerManager) {
        var positionVm = this;
        var customerId = Number.parseInt($routeParams.id);
        var customer = customerManager.getCustomer(customerId);
        positionVm.customerPosition = customer.balance;
    }

    function CustomerTradesController($routeParams, customerManager) {
        var tradesVm = this;
        var customerId = Number.parseInt($routeParams.id);
        var customer = customerManager.getCustomer(customerId);
        tradesVm.trades = customer.trades;
    }
})();
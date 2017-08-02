(function() {
    'use strict';
    angular.module('customerManagerApp')
        .service('customerManager', CustomerManagerConst);

    function CustomerManagerConst() {
        var customers = [{
                id: 1,
                name: 'Ken',
                balance: 300,
                trades: [
                    { fromAcct: 1, amount: 100 },
                    { fromAcct: 442, amount: 300 }
                ]
            },
            {
                id: 2,
                name: 'Mark',
                balance: 10000,
                trades: [
                    { fromAcct: 999, amount: 10000 }
                ]
            }
        ];

        this.getCustomer = function(id) {
            var foundCustomer = customers.find(function(customer) {
                return customer.id === id;
            });
            if (foundCustomer) {
                return angular.copy(foundCustomer);
            } else {
                throw 'Customer not found!';
            }
        };

        this.getCustomers = function() {
            return angular.copy(customers);
        };

        this.updateBalance = function(id, balance) {
            var customer = customers.find(function(customer) {
                return customer.id === id;
            });

            if (customer) {
                customer.balance = balance;
                return customer;
            } else {
                throw 'No customer with id ' + id;
            }
        }
    }
})();
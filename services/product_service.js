(function(angular) {
    "use strict"; //alerts you to problems in  your script

    var app = angular.module('MyStore'); //we are getting the module that is already registered with angular

    app.factory('ProductService', function($http) {
        //angular factories return service objects
        return {
            //object literal
            getProducts: function() {
                return $http.get('assets/json/products.json') //Returns the promise

            },

            getProductFilters: function() {
                //returns promise
                return $http.get('assets/json/product-filters.json')
            }
        }

    });


})(window.angular);

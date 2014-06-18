(function(angular) {
    "use strict"; //alerts you to problems in  your script

    var app = angular.module('MyStore'); //we are getting the module that is already registered with angular

    app.factory('ProductService', function($http) {
        //angular factories return service objects
        return {
            //object literal

            getProduct: function(guid) {
                return $http.get('/api/product/'+guid);
            },

            getProducts: function() {
                return $http.get('/api/products') //Returns the promise

            },

            getProductFilters: function() {
                //returns promise
                return $http.get('assets/json/product-filters.json')
            },

            getFeaturedProducts: function() {
                return $http.get('/api/products/featured')
            }
        }

    });


})(window.angular);

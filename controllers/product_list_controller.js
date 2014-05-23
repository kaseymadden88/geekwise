(function(angular) {
    "use strict"; //tells us if our code is correct?

    var app = angular.module('MyStore');

    app.controller('ProductList', function($scope, ProductService) { //angular looks up and resolves the dependency (scope: which is already a service)

            ProductService.getProducts().then(
                function(response) {
                    $scope.products = response.data;
                },
                function(reason) {
                    $scope.errorMessage = reason.statusText;
                }

            );

        
            ProductService.getProductFilters().then(
                function(response) {
                    $scope.filters = response.data;
                }
            );

    });

})(window.angular);
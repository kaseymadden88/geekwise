(function(angular) {
    "use strict"; //tells us if our code is correct?

    var app = angular.module('MyStore');

    app.controller('ProductList', function($scope, $http) { //angular looks up and resolves the dependency (scope: which is already a service)

        $http.get('assets/json/products.json')
            .then(
                function(response) {
                    $scope.products = response.data;
                },
                function(reason) {
                    $scope.errorMessage = reason.statusText;
                }

            );

        $http.get('assets/json/product-filters.json')
            .then(
                function(response) {
                    $scope.filters = response.data;
                }
            );

    });

})(window.angular);
(function(angular) {
    "use strict"; //tells us if our code is correct?

    var app = angular.module('MyStore');

    app.controller('Home', function($scope, ProductService) { //angular looks up and resolves the dependency (scope: which is already a service)

        $scope.featuredProducts = [];

        ProductService.getProducts().then(function(response) {

            var products = response.data;

            angular.forEach(products, function(product) {

                if(product.isFeatured === true) {

                    $scope.featuredProducts.push(product);

                }
            });

        });


  });

})(window.angular);
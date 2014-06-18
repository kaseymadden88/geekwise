(function(angular) {
    "use strict"; //tells us if our code is correct?

    var app = angular.module('MyStore');

    app.controller('Home', function($scope, ProductService) { //angular looks up and resolves the dependency (scope: which is already a service)

        ProductService.getFeaturedProducts().then(function(response) {
            $scope.featuredProducts = response.data;

        });

    });


})(window.angular);

            //angular.forEach(products, function(product) {

              //  if(product.isFeatured === true) {

                //    $scope.featuredProducts.push(product);

                //}
            //});
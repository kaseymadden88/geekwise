(function(angular) {
  "use strict";

  var app = angular.module('MyStore');

  app.controller('ProductDetail', function($scope, $stateParams, ProductService) {

        // Set the id from the $stateParams to a local product_guid variable
    var product_guid = $stateParams.id;
    
        $scope.featuredProducts = [];

        // Get the products from the product service
        ProductService.getProducts(product_guid).then(function(response) {
            $scope.product = response.data;

        });

        ProductService.getProduct().then(function(response) {

            // Add the resulting array of products to a local products variable
            var products = response.data;

            // Loop through the products array using Angular's built-in forEach function
            angular.forEach(products, function(product) {

                // Check if the current product's guid property is equal to id from the URL
                if(product.guid !== product_guid && product.isFeatured) {

                $scope.featuredProducts.push(product);
              
              }


                    // We've found a match, add the matching product to the $scope

            });
        });

      });
})(window.angular);
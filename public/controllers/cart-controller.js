(function(angular){
    var app = angular.module('MyStore');

    app.controller('CartController', function($scope, CartService) {

            $scope.items = CartService.getItems();            

            $scope.addItem = CartService.addItem;

            $scope.getItemCount = CartService.getItemCount;

            $scope.removeItem = CartService.removeItem;

            $scope.cartSubtotal = CartService.getCartSubtotal;

            $scope.cartTotal = CartService.getCartTotal;

            $scope.checkout = function() {
              CartService.checkout();
            };

    });
    
})(window.angular);
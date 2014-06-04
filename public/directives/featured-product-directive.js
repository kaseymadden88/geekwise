(function(angular){
    "use strict";

    var app = angular.module('MyStore');

    app.directive('msFeaturedProduct', function(){
        return {

            scope: {
                product: '=product'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/featured-product.html'

        };

    });

})(window.angular);
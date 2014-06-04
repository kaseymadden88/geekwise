(function(angular) {
    "use strict";

    var app = angular.module('MyStore');

    app.directive('msProductDetailsButton', function(){ // in html ms-product-details-button
        return {
            // E for Element
            // A for Attribute
            // C for Class
            scope: {
                // 3 types of bindings for scope properties
                // 1. @ which is a string
                // 2. & which is a one-way binding
                // 3. = which is a two-way binding
                myVar: '@productId' // in html will look like this: product-id
            },
            restrict: 'E',
            replace: true, // replaces whatever template we specify in the directive
            templateUrl: 'templates/product-details-button.html'
            
        };
    })

})(window.angular);
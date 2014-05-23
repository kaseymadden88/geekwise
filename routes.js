(function(angular){

    var app = angular.module('MyStore'); //we don't pass in a second perimeter because this is getting the module not setting one

    app.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'views/home.html'
          }) //setting up our routes
          .state('products', {
            url: '/products',
            controller: 'ProductList', //connects to the product_list_controller file under "controllers"
            templateUrl: 'views/product_list.html'
          })
          .state('product', {
            url: '/product/:id',
            controller: 'ProductDetail',
            templateUrl: 'views/product_detail.html'
          })
          .state('about', {
            url: '/about',
            templateUrl: ''
          })
          .state('contact', {
            url: '/contact',
            templateUrl: ''
          }); //we set up four states
    });

})(window.angular);
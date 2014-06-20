(function(angular) {
  "use strict";

  var app = angular.module('MyStore', ['ngCookies', 'ngMessages', 'ui.router']); //This creates our first module, inside the () are the dependencies

  //app.constant('APPNAME', {}); put constants in all capitals letters so you can see it easily.

  app.value('config', {
      paypal: {
        merchantID: 'aaronaroberson@gmail.com'
      }
  });

})(window.angular);



//creates our routing system
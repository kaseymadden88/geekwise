(function(angular) {
  "use strict";
 
  var app = angular.module('MyStore');
 
  app.factory('CartService', function($cookieStore, ProductService, config) {
 
    // Private items variable
    var items = {};
 
    // Angular factories return service objects
    var cart = {
 
      getItems: function() {
        var itemsCookie;
        // Returns items array
        if(!items.length) {
          itemsCookie = $cookieStore.get('items');
          if(itemsCookie) {
            angular.forEach(itemsCookie, function(item, key) {
              ProductService.getProduct(key).then(function(response) {
                var product = response.data;
                product.quantity = item;
                  items[product.guid] = product; //key and product.guid are basically the same thing
            });
          });
          }
        }
        return items;
      },
 
      addItem: function(item) {
        
        // Checks if item already exists
        // If it exists, updates the quantity
        // If it doesn't exist, adds quantity property with value of 1 then
        // pushes the item onto the items array
        if(!items[item.guid]) {
            item.quantity = 1;
            items[item.guid] = item;
        } else {
          items[item.guid].quantity += 1;
          //items[item.guid]. quantity = itself + 1
        }
        cart.updateItemsCookie();
        console.log("hi")

      },
 
      removeItem: function(guid) {
        // Removes an item from the items array
        // Can use angular.forEach(array, function(item, index) to splice
          delete items[guid];
          // var myArr = new Array and you tried to delete my.Arr.splice it wouldn't work, you can't delete built in methods such as splice or length
          // You can't delete variables either.
          cart.updateItemsCookie();
      },
 
      emptyCart: function() {
        // Sets items array to empty array
          items = {}; //deletes everything that was on it and creates a new object in its place
          $cookieStore.remove('items'); //removes items from the cookieStore if cart is empty
      },
 
      getItemCount: function() {
        // returns number of items, including item quantity
          var total = 0;
          angular.forEach(items, function(item) { //you are passing a function into another function and calls that function
              total += item.quantity
          });
          return total;
            // look up closures on your own
      },
 
      getCartSubtotal: function() {
        // Return the item quantity times item price for each item in the array
        var total = 0;
        angular.forEach(items, function(item) {
            var s = parseInt(item.quantity);
            var q = isNaN(s) ? 0 : s;
            var p = cart.getItemPrice(item);
            total += q * p
        });
        return total
      },
 
      getCartTotal: function() {
        // Return the cartSubtotal plus shipping and handling
        // Return the item quantity times item price for each item in the array
        return cart.getCartSubtotal();
      },

      updateItemsCookie: function() {
        var itemsCookie = {};
        angular.forEach(items, function(item, key){
          itemsCookie[key] = item.quantity;
        });
        $cookieStore.put('items', itemsCookie);
      },

      checkout: function() {
        // create form DOM element
        var form = $('<form></form>');

        var data = {
            business: config.paypal.merchantId,
            currency_code: 'USD',
            cmd: '_cart',
            upload: 1,
            charset: "utf-8",
        };

        var counter = 0;

        // '[value of the guid]': { guid: '', title:'', quantity: 0}

        angular.forEach(items, function(item, key) {
            counter += 1;
            data["item_number_" + counter] = item.id;
            data["item_name_" + counter] = item.title;
            data["quantity_" + counter] = item.quantity;
            data["amount_" + counter] = cart.getItemPrice(item);
        });
        
        form.attr("action", "https://www.paypal.com/cgi-bin/webscr");
        form.attr("method", "POST");
        form.attr("style", "display:none;");

        angular.forEach(data, function(value, name) {
            if (value != null) {
            var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
            form.append(input);
            }

        });

          $("body").append(form);
 
          // submit form
          form.submit();
          form.remove();
      },

      getItemPrice: function(item) {
        return parseFloat(item.isSpecial ? item.specialPrice : item.price);
      },

    };

      return cart;
 
  });
 
})(window.angular);
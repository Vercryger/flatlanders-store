// Products' Directives

(function() {
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'E', // type of the directive (E - Element, A - Attribute and so on)
      templateUrl: 'templates/product-title.html'
    };
  });
  app.directive('productDescription', function() {
    return {
      restrict: 'E', 
      templateUrl: 'templates/product-description.html'
    };
  });
  app.directive('productSpecs', function() {
    return {
      restrict: 'E', 
      templateUrl: 'templates/product-specs.html'
    };
  });
  app.directive('productReviews', function() {
    return {
      restrict: 'E', 
      templateUrl: 'templates/product-reviews.html'
    };
  });
  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-panels.html',
      controller: function() {
        this.tab = 1;
        this.setTab = function(newValue){
          this.tab = newValue;
        };
        this.isSet = function(tabName){
          return this.tab === tabName;
        };
      },
      controllerAs: 'tab'
    };
  });
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(thumbToSet) {
         this.current = (thumbToSet !== null) ? thumbToSet : 0;
        };
      },
      controllerAs: 'thumb'
    };
  });
})();
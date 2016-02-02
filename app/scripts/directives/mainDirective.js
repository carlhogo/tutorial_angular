'use strict';

/**
 * @ngdoc function
 * @name tutorialAngularApp.directive:MainDirective
 * @description
 * # MainDirective
 * Directive of the tutorialAngularApp
 */


var app = angular.module('exampleDirective', [])

app.directive('productDescription', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/product-description.html'
	};
});

app.directive('productSpecs', function(){
	return{
		restrict: 'A',
		templateUrl: 'views/product-specs.html'
	};
});

app.directive('productReviews', function(){
	return{
		restrict: 'A',
		templateUrl: 'views/product-reviews.html'
	};
});


app.directive('productTabs', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/product-tabs.html',
    	controller:function(){
	      		var vm = this;
		 		vm.tab = 1;
		 		vm.setTab = function(selectTab){
		 			vm.tab = selectTab; 
		 		};
		 		vm.isSet = function(tabName){
		 			return vm.tab === tabName;
		 		};
	    },
		controllerAs: 'tab'
	};
});

app.directive('productGallery', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/product-gallery.html',
		controller: function(){
			  this.current = 0;
			    this.setCurrent = function(newGallery){
			      this.current = newGallery || 0;
			    };
		},
		controllerAs: 'gallery'
	};
});

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
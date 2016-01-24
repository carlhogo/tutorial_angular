'use strict';

/**
 * @ngdoc function
 * @name tutorialAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialAngularApp
 */



 angular.module('exampleController', [])
  .controller('StoreCtrl', function () {
  	this.products = gems;
  });

var gems = [
	{ name: 'Azurite', price: 2.95, soldOut: false, canPurchase: true},
    { name: 'Bloodstone', price: 5.95, soldOut: false, canPurchase: true},
    { name: 'Zircon', price: 3.95, soldOut: false, canPurchase: true }
];